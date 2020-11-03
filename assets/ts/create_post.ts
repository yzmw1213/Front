import { Component, Vue, Emit } from "nuxt-property-decorator"
import { Error } from "grpc-web"
import { genderChoices, numChoices, tagChoices } from "~/plugins/const"
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

import { tPostItem, postServiceClient, PostService } from "~/service/PostService"

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
  tagChoices: { text: string, key: Number }[] = tagChoices

  editedItem: tPostItem = {
    postID: 0,
    status: 0,
    title: "",
    content: "",
    maxNum: 2,
    gender: 0,
    tags: [],
    createUserID: usersModule.loginUserId,
    updateUserID: 0
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

  created() {
    this.pService = new PostService()
    // this.editedItem = postModule.editPost
    console.log(this.editedItem)
  }

  create(post: Post) {
    const request = new CreatePostRequest()
    request.setPost(post)
    postServiceClient.createPost(request, {}, (err, res: CreatePostResponse) => {
      console.log("create")
      console.log(res)
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
      console.log(err.message)
      console.log(err)
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
