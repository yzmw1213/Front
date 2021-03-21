import { Action, Mutation, VuexModule, getModule, Module } from "vuex-module-decorators"
import store from "~/store/store"
import { usersModule } from "~/store/modules/users"
import {
  ListPostRequest,
  ListPostResponse,
  Post as _Post
} from "~/grpc/post_pb"

import { tPostItem, defaultPostItem, postServiceClient } from "~/service/PostService"
import { tCommentItem } from "~/service/CommentService"
import { mapPbCommentToComment } from "~/store/modules/comment"
export interface PostState {
  posts: tPostItem[]
  editPost: tPostItem
  condition: string
}

@Module({
  dynamic: true,
  store,
  name: "post",
  namespaced: true
})

class Post extends VuexModule implements PostState {
  // editTag 編集中の投稿の初期化
  editPost: tPostItem = {
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
    comments: [],
  }

  condition: string = ""

  posts: tPostItem[] = []

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

  @Mutation
  public SET_CONDITION(condition: string) {
    this.condition = condition
  }

  // 表示ユーザーが作成した投稿を取得
  @Action({ commit: "SET_POSTS" })
  async getPostsByCreateUserID(id: number) {
    const cp: tPostItem[] = []
    let i = 0
    const request = new ListPostRequest()
    request.setId(id)
    request.setCondition("create")

    await postServiceClient.listPost(request, {}, (_, res: ListPostResponse) => {
      if (res.getCount() > 0) {
        while (i < res.getPostList().length) {
          const post = res.getPostList()[i]
          cp.push(mapPbPostToPost(post))
          i++
        }
      }
      return this.posts
    })
    return cp
  }

  // 表示ユーザーがLIKEした投稿を取得
  @Action({ commit: "SET_POSTS" })
  async getPostsByLikeUserID(id: number) {
    const lp: tPostItem[] = []
    let i = 0
    const request = new ListPostRequest()
    request.setId(id)
    request.setCondition("like")

    await postServiceClient.listPost(request, {}, (_, res: ListPostResponse) => {
      if (res.getCount() > 0) {
        while (i < res.getPostList().length) {
          const post = res.getPostList()[i]
          lp.push(mapPbPostToPost(post))
          i++
        }
      }
    })
    return lp
  }

  // 選択したタグが付与された投稿を取得
  @Action({ commit: "SET_POSTS" })
  async getPostsByTagID(id: number) {
    const tp: tPostItem[] = []
    let i = 0
    const request = new ListPostRequest()
    request.setId(id)
    request.setCondition("tag")

    await postServiceClient.listPost(request, {}, (_, res: ListPostResponse) => {
      if (res.getCount() > 0) {
        while (i < res.getPostList().length) {
          const post = res.getPostList()[i]
          tp.push(mapPbPostToPost(post))
          i++
        }
      }
    })
    return tp
  }

  // 全ての投稿を取得
  @Action({ commit: "SET_POSTS" })
  async getAllPosts() {
    const p: tPostItem[] = []
    let i = 0
    const request = new ListPostRequest()
    request.setCondition("")

    await postServiceClient.listPost(request, {}, (_, res: ListPostResponse) => {
      while (i < res.getPostList().length) {
        const post = res.getPostList()[i]
        p.push(mapPbPostToPost(post))
        i++
      }
    })
    return p
  }

  // mutation
  @Mutation
  public CLEAR_EDIT_POST() {
    this.editPost = defaultPostItem
  }

  public get values(): tPostItem[] {
    return this.posts
  }
}

const mapPbPostToPost = (post: _Post): tPostItem => {
  console.log("NUXT_ENV_S3_END on mapPbPostToPost", process.env.NUXT_ENV_S3_END)
  let j = 0
  const comments: tCommentItem[] = []
  while (j < post.getCommentsList().length) {
    const comment = post.getCommentsList()[j]
    comments.push(mapPbCommentToComment(comment))
    j++
  }
  return {
    postID: post.getId(),
    status: 0,
    title: post.getTitle(),
    content: post.getContent(),
    tags: post.getTagsList(),
    image: process.env.NUXT_ENV_S3_END + post.getImage(),
    createUserID: post.getCreateUserId(),
    createUserName: post.getCreateUserName(),
    updateUserID: post.getUpdateUserId(),
    updateUserName: post.getUpdateUserName(),
    likeUsers: post.getLikeUsersList(),
    likeUsersNum: post.getLikeUsersList().length,
    likedByLoginUser: post.getLikeUsersList().includes(usersModule.loginUserId),
    comments: comments
  }
}
export const postModule = getModule(Post)
