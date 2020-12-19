import { Post } from "~/grpc/post_pb"
import { PostItem } from "~/assets/ts/constructor/PostItem"
import { PostServiceClient } from "~/grpc/PostServiceClientPb"
import { usersModule } from "@/store/modules/users"

let proxyServerUrl: string = ""
const url = process.env.NUXT_ENV_PROXY_SERVER_URL

if (typeof url === "string") {
  proxyServerUrl = url
}

// Client credentials
const postServiceClient: PostServiceClient = new PostServiceClient(
  proxyServerUrl, {}, {}
)

// tPostItem Formで編集する物件投稿の型
export type tPostItem = {
  postID: number
  status: number
  title: string
  content: string
  tags: number[]
  createUserID: number
  createUserName: string
  updateUserID: number
  updateUserName: string
  likeUsers: number[]
  likeUsersNum: number
  likedByLoginUser: boolean
}

export const defaultPostItem: tPostItem = {
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
}

export class PostService {
  makePost(postItem: tPostItem): Post {
    const post = new Post()
    post.setId(postItem.postID)
    // post.setStatus(postItem.status)
    post.setTitle(postItem.title)
    post.setContent(postItem.content)
    post.setTagsList(postItem.tags)
    post.setCreateUserId(postItem.createUserID)
    post.setUpdateUserId(postItem.updateUserID)
    return post
  }

  makeDefaultPost(): tPostItem {
    return defaultPostItem
  }

  getPost(post: Post): tPostItem {
    const returnPost = new PostItem(
      post.getId(),
      0,
      // Rstatus[post.getStatus()],
      post.getTitle(),
      post.getContent(),
      post.getTagsList(),
      post.getCreateUserId(),
      post.getCreateUserName(),
      post.getUpdateUserId(),
      post.getUpdateUserName(),
      post.getLikeUsersList(),
      post.getLikeUsersList().length,
      post.getLikeUsersList().includes(usersModule.loginUserId),
    )
    if (usersModule.loginUserId < 1) {
      returnPost.likedByLoginUser = false
    }
    return returnPost
  }
}

export default PostService

export { postServiceClient }
