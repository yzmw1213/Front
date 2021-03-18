import { Component, Vue, Emit } from "nuxt-property-decorator"
import { Error } from "grpc-web"
import { postModule } from "@/store/modules/post"
import { usersModule } from "@/store/modules/users"
import { tagsModule } from "~/store/modules/tags"

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

  // validTags: TTagChoice[] = []

  editedItem: tPostItem = {
    postID: 0,
    status: 0,
    title: "",
    content: "",
    tags: [],
    image: "",
    createUserID: usersModule.loginUserId,
    createUserName: usersModule.loginUserName,
    updateUserID: 0,
    updateUserName: "",
    likeUsers: [],
    likeUsersNum: 0,
    likedByLoginUser: false,
    comments: [],
  }

  uploadImageUrl: string | ArrayBuffer | null = ""

  created() {
    this.pService = new PostService()
  }

  get validTags() {
    return tagsModule.validTags
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


  @Emit("go-home")
  cancelPost() {
    const defaultPost = this.pService.makeDefaultPost()
    postModule.SET_EDIT_POST(defaultPost)
  }

  onImagePicked(e: Event) {
    e.preventDefault()
    if (e.target instanceof HTMLInputElement) {
      // ファイルを取得できない場合は処理を終了する.
      // Object is possibly null を以下で対処できるかどうか.
      if (e.target.files!.length === 0) {
        this.submittedArticle.image = ""
        this.editedItem.image = ""
        this.uploadImageUrl = ""
        return
      }
      const image = e.target.files![0]
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
      this.editedItem.image = this.submittedArticle.image
      this.uploadImageUrl = reader.result
    }
  }
}
