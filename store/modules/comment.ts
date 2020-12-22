import { Mutation, VuexModule, getModule, Module } from "vuex-module-decorators"
import store from "~/store/store"

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

export const commentModule = getModule(Comment)
