import { Component, Vue, Emit } from "nuxt-property-decorator"
import { Error } from "grpc-web"
import { postModule } from "@/store/modules/post"
import { usersModule } from "@/store/modules/users"
import { commentModule } from "@/store/modules/comment"

import {
  CreateCommentRequest,
  CreateCommentResponse,
  ResponseStatus,
  Comment,
  UpdateCommentRequest,
  UpdateCommentResponse
} from "~/grpc/post_pb"

import { PostService, tPostItem, postServiceClient } from "~/service/PostService"
import { CommentService, tCommentItem } from "~/service/CommentService"

@Component({})
export default class ShowPost extends Vue {
  pService: PostService
  cService: CommentService
  item: tPostItem = {
    postID: 0,
    status: 0,
    title: "",
    content: "",
    tags: [],
    createUserID: 0,
    createUserName: "",
    updateUserID: 0,
    updateUserName: "",
    likeUsers: [],
    likeUsersNum: 0,
    likedByLoginUser: false,
    comments: []
  }

  editComment: tCommentItem = {
    commentID: 0,
    postID: this.item.postID,
    commentContent: "",
    createUserID: usersModule.loginUserId,
    createUserName: usersModule.loginUserName,
  }

  created() {
    this.pService = new PostService()
    this.cService = new CommentService()
    this.item = postModule.editPost
  }

  post() {
    if (usersModule.loginUserId < 1) {
      // まだログインして無い場合、ログイン画面に遷移
      this.moveToLogin()
      return
    }
    const id: number = this.editComment.commentID
    const comment = this.cService.makeComment(this.editComment)
    comment.setPostId(this.item.postID)
    if (id === 0) {
      this.create(comment)
    }
    if (id > 0) {
      this.update(comment)
    }
  }

  create(comment: Comment) {
    const request = new CreateCommentRequest()
    request.setComment(comment)
    postServiceClient.createComment(request, {}, (err, res: CreateCommentResponse) => {
      this.handleCreateUpdateResponse(res, err)
    })
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
      this.cancelPost()
    }
  }

  @Emit("go-home")
  cancelPost() {
    const defaultComment = this.cService.makeDefaultComment()
    commentModule.SET_EDIT_COMMENT(defaultComment)
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
