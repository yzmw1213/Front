import { Component, Vue, Emit } from "nuxt-property-decorator"
import { Error } from "grpc-web"
import { postModule } from "@/store/modules/post"
import { usersModule } from "@/store/modules/users"
import { tagsModule } from "~/store/modules/tags"

import {
  CreateCommentRequest,
  CreateCommentResponse,
  ResponseStatus,
  Comment,
  UpdateCommentRequest,
  UpdateCommentResponse, ReadPostResponse, ReadPostRequest, DeleteCommentRequest, DeleteCommentResponse
} from "~/grpc/post_pb"

import { PostService, tPostItem, postServiceClient } from "~/service/PostService"
import { CommentService, tCommentItem } from "~/service/CommentService"

@Component({})
export default class ShowPost extends Vue {
  pService: PostService
  cService: CommentService
  commentEditing: boolean = false
  dialog: boolean = false
  vt: string[] = []
  item: tPostItem = {
    postID: 0,
    status: 0,
    title: "",
    content: "",
    tags: [],
    image: "",
    createUserID: 0,
    createUserName: "",
    updateUserID: 0,
    updateUserName: "",
    likeUsers: [],
    likeUsersNum: 0,
    likedByLoginUser: false,
    comments: []
  }

  isLoginUser: boolean = false

  formComment: tCommentItem = {
    commentID: 0,
    postID: this.item.postID,
    commentContent: "",
    createUserID: usersModule.loginUserId,
    createUserName: usersModule.loginUserName,
    createdByLoginUser: false,
  }

  get validTags() {
    return tagsModule.validTags
  }

  created() {
    this.pService = new PostService()
    this.cService = new CommentService()
    this.item = postModule.editPost
    this.isLoginUser = this.item.createUserID === usersModule.loginUserId

    for (const tag of this.validTags) {
      this.vt[tag.key] = tag.text
    }
  }

  initialize() {
    this.formComment.commentID = 0
    this.formComment.commentContent = ""
    this.getPost()
    postModule.SET_EDIT_POST(Object.assign({}, this.item))
  }

  getPost() {
    const request = new ReadPostRequest()
    request.setId(this.item.postID)
    postServiceClient.readPost(request, {}, (err, res: ReadPostResponse) => {
      if (err != null) {
        this.$setStatusMessage("UNKNOWN_ERROR")
      }
      const post: any = res.getPost()
      this.item = this.pService.getPost(post)
    })
  }

  post() {
    if (usersModule.loginUserId < 1) {
      // まだログインして無い場合、ログイン画面に遷移
      this.moveToLogin()
      return
    }
    const id: number = this.formComment.commentID
    const comment = this.cService.makeComment(this.formComment)
    comment.setPostId(this.item.postID)
    if (id === 0) {
      this.create(comment)
    }
    if (id > 0) {
      this.update(comment)
    }
  }

  @Emit("update-post")
  updatePost() {
  }

  create(comment: Comment) {
    const request = new CreateCommentRequest()
    request.setComment(comment)
    postServiceClient.createComment(request, {}, (err, res: CreateCommentResponse) => {
      this.handleCreateUpdateResponse(res, err)
    })
  }

  editComment(i: number) {
    this.formComment.commentContent = this.item.comments[i].commentContent
    this.formComment.commentID = this.item.comments[i].commentID
    this.commentEditing = !this.commentEditing
  }

  deleteComment(i: number) {
    // 削除してよいかconfirm
    const flag: boolean = confirm("コメントを削除しますか?")
    if (flag !== true) {
      return
    }
    const request = new DeleteCommentRequest()
    request.setId(this.item.comments[i].commentID)
    postServiceClient.deleteComment(request, {}, (err, res: DeleteCommentResponse) => {
      this.handleCreateUpdateResponse(res, err)
      this.initialize()
    })
  }

  @Emit("show-user")
  showUser() {
    usersModule.SET_USER_ID(this.item.createUserID)
  }

  @Emit("go-home")
  searchTag(id: number) {
    tagsModule.SET_SEARCH_TAG(id)
    // 選択されたタグで検索を行う
    postModule.getPostsByTagID(id)
  }

  update(comment: Comment) {
    const request = new UpdateCommentRequest()
    request.setComment(comment)
    postServiceClient.updateComment(request, {}, (err, res: UpdateCommentResponse) => {
      this.handleCreateUpdateResponse(res, err)
    })
  }

  handleCreateUpdateResponse(res: CreateCommentResponse | UpdateCommentResponse, err: Error) {
    if (err != null) {
      // status.codeに応じたダイアログ表示
      this.$setStatusMessage(err.message)
    } else {
      const status: ResponseStatus | undefined = res.getStatus()
      const code = status!.getCode()
      // status.codeに応じたダイアログ表示
      this.$setStatusMessage(code)
      this.cancelComment()
    }
  }

  cancelComment() {
    this.formComment.commentContent = ""
    this.commentEditing = !this.commentEditing
  }

  @Emit("go-home")
  cancelPost() {
  }

  // 投稿に対するお気に入り情報の更新
  changeLikeStatus() {
    if (usersModule.loginUserId < 1) {
      // まだログインして無い場合、ログイン画面に遷移
      this.moveToLogin()
      return
    }
    // likeを取り消す
    if (this.item.likedByLoginUser === true) {
      this.$notlikePost(this.item.postID)
      this.item.likeUsersNum--
      this.item.likedByLoginUser = false
    // likeする
    } else {
      this.$likePost(this.item.postID)
      this.item.likeUsersNum++
      this.item.likedByLoginUser = true
    }
  }

  @Emit("do-login")
  moveToLogin() {
  }
}
