import { Component, Vue, Emit } from "nuxt-property-decorator"
import { Error } from "grpc-web"
import { genderChoices, numChoices } from "~/plugins/const"
import { postModule } from "@/store/modules/post"
import { usersModule } from "@/store/modules/users"

import {
  CreatePostRequest,
  CreatePostResponse,
  ResponseStatus,
  Post,
  UpdatePostRequest,
  UpdatePostResponse,
} from "~/grpc/post_pb"

import {
  ListValidTagRequest,
  ListValidTagResponse,
} from "~/grpc/tag_pb"

import { tPostItem, postServiceClient, PostService } from "~/service/PostService"
import { TTagChoice, tagServiceClient } from "~/service/TagService"

@Component({})
export default class CreatePost extends Vue {
  pService: PostService
  // variables
  submittedArticle :{ title: string, description: string, image: string } ={
    title: "",
    description: "",
    image: "",
  }

  numChoices: Number[] = numChoices
  genderChoices: { text: string, key: Number }[] = genderChoices
  validTags: TTagChoice[] = []

  editedItem: tPostItem = {
    postID: 0,
    status: 0,
    title: "",
    content: "",
    maxNum: 2,
    // gender: 0,
    tags: [],
    createUserID: usersModule.loginUserId,
    // Vuexにログインユーザー名を追加し取得する
    createUserName: "",
    updateUserID: 0,
    updateUserName: ""
  }

  created() {
    this.pService = new PostService()
    this.getValidTag()
  }

  // methods
  post() {
    const id: number = this.editedItem.postID
    const post = this.pService.makePost(this.editedItem)

    if (id === 0) {
      this.create(post)
    }
    if (id > 0) {
      this.update(post)
    }
    // imageはgRPCでサーバーに送り、サーバー側の処理でS3に上げる。
    console.log(this.editedItem.content)
    console.log(this.submittedArticle.image)
    console.log(this.submittedArticle.title)

    // ファイルの更新日時を取得し、古い場合はワーニングを出すなど
  }

  create(post: Post) {
    const request = new CreatePostRequest()
    request.setPost(post)
    postServiceClient.createPost(request, {}, (err, res: CreatePostResponse) => {
      this.handleCreateUpdateResponse(res, err)
    })
  }

  update(post: Post) {
    const request = new UpdatePostRequest()
    request.setPost(post)
    postServiceClient.updatePost(request, {}, (err, res: UpdatePostResponse) => {
      console.log("update")
      console.log(res)
      this.handleCreateUpdateResponse(res, err)
    })
  }

  handleCreateUpdateResponse(res: CreatePostResponse | UpdatePostResponse, err: Error) {
    if (err != null) {
      // status.codeに応じたダイアログ表示
      this.$setStatusMessage(err.message)
    } else {
      const status: ResponseStatus | undefined = res.getStatus()
      const code = status!.getCode()
      // status.codeに応じたダイアログ表示
      this.$setStatusMessage(code)
      this.cancelPost()
    }
  }

  // getValidTag 有効タグを取得しセレクトボックスに格納する
  getValidTag() {
    let i = 0
    const request = new ListValidTagRequest()
    tagServiceClient.listValidTag(request, {}, (err, res: ListValidTagResponse) => {
      while (i < res.getTagList().length) {
        if (err != null) {
          this.$setStatusMessage("UNKNOWN_ERROR")
        }
        const tag = res.getTagList()[i]
        const tagChoice: TTagChoice = {
          text: tag.getTagName(),
          key: tag.getTagId()
        }
        this.validTags.push(tagChoice)
        i++
      }
    })
  }

  @Emit("go-home")
  cancelPost() {
    const defaultPost = this.pService.makeDefaultPost()
    postModule.SET_EDIT_POST(defaultPost)
  }

  onImageUploaded(e: Event) {
    e.preventDefault()
    if (e.target instanceof HTMLInputElement) {
      // ファイルを取得できない場合は処理を終了する.
      // Object is possibly null を以下で対処できるかどうか.
      if (e.target.files!.length === 0) {
        return
      }
      const image = e.target.files![0]
      this.submittedArticle.title = image.name
      this.createImage(image)
    }
  }

  createImage(image: Blob) {
    const reader = new FileReader()
    // imageをreaderにDataURLとしてattachする
    reader.readAsDataURL(image)
    // readAdDataURLが完了したあと実行される処理
    reader.onload = () => {
      this.submittedArticle.image = reader.result as string
    }
  }
}
