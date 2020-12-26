import { Mutation, VuexModule, getModule, Module } from "vuex-module-decorators"
import store from "~/store/store"

import { tPostItem, defaultPostItem } from "~/service/PostService"

export interface PostState {
  editPost: tPostItem
}

@Module({
  dynamic: true,
  store,
  name: "post",
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
    tags: [],
    createUserID: 0,
    createUserName: "",
    updateUserID: 0,
    updateUserName: "",
    likeUsers: [],
    likeUsersNum: 0,
    likedByLoginUser: false,
    comments: [],
  }

  posts: tPostItem[]

  // mutation
  @Mutation
  public SET_EDIT_POST(ePost: tPostItem) {
    this.editPost = ePost
  }

  @Mutation
  public INIT_POSTS() {
    this.posts = []
  }

  @Mutation
  public SET_POSTS(posts: tPostItem[]) {
    this.posts = posts
  }

  // mutation
  @Mutation
  public CLEAR_EDIT_POST() {
    this.editPost = defaultPostItem
  }
}

export const postModule = getModule(Post)
