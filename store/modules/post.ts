import { Mutation, VuexModule, getModule, Module } from "vuex-module-decorators"
import store from "~/store/store"

import { tPostItem } from "~/service/PostService"

export interface PostState {
  editPost: tPostItem
}

@Module({
  dynamic: true,
  store,
  name: "tag",
  namespaced: true
})

class Post extends VuexModule implements PostState {
  // state
  // editTag 編集中のタグの初期化
  editPost: tPostItem = {
    postID: 0,
    status: 0,
    title: "",
    content: "",
    maxNum: 1,
    gender: 0,
    tags: [],
    createUserID: 0,
    updateUserID: 0
  }

  // mutation
  @Mutation
  public SET_EDIT_POST(ePost: tPostItem) {
    this.editPost = ePost
  }
}

export const postModule = getModule(Post)