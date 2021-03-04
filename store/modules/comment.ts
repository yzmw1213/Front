import { Mutation, VuexModule, getModule, Module } from "vuex-module-decorators"
import store from "~/store/store"
import { Comment as _Comment } from "~/grpc/post_pb"

import { tCommentItem } from "~/service/CommentService"

export interface CommentState {
  editComment: tCommentItem
}

@Module({
  dynamic: true,
  store,
  name: "comment",
  namespaced: true
})

class Comment extends VuexModule implements CommentState {
  // editComment 編集中のコメントの初期化
  editComment: tCommentItem = {
    commentID: 0,
    postID: 0,
    createUserID: 0,
    createUserName: "",
    commentContent: "",
  }

  // mutation
  @Mutation
  public SET_EDIT_COMMENT(eComment: tCommentItem) {
    this.editComment = eComment
  }
}

export const mapPbCommentToComment = (comment: _Comment): tCommentItem => {
  return {
    commentID: comment.getId(),
    postID: comment.getPostId(),
    commentContent: comment.getContent(),
    createUserID: comment.getCreateUserId(),
    createUserName: comment.getCreateUserName()
  }
}

export const commentModule = getModule(Comment)
