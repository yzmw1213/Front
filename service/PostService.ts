import { CommentService, tCommentItem } from "./CommentService"
import { Post } from "~/grpc/post_pb"
import { PostItem } from "~/assets/ts/constructor/PostItem"
import { PostServiceClient } from "~/grpc/PostServiceClientPb"
import { usersModule } from "@/store/modules/users"

let proxyServerUrl: string = ""
const url = process.env.NODE_ENV === "production" ? process.env.NUXT_ENV_API_DNS : "http://localhost:8080"

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
  image: string
  createUserID: number
  createUserName: string
  updateUserID: number
  updateUserName: string
  likeUsers: number[]
  likeUsersNum: number
  likedByLoginUser: boolean
  comments: tCommentItem[]
}

export const defaultPostItem: tPostItem = {
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

export class PostService {
  comments: any[] = []
  cService: CommentService
  makePost(postItem: tPostItem): Post {
    const post = new Post()
    post.setId(postItem.postID)
    // post.setStatus(postItem.status)
    post.setTitle(postItem.title)
    post.setContent(postItem.content)
    post.setTagsList(postItem.tags)
    post.setImage(postItem.image)
    post.setCreateUserId(postItem.createUserID)
    post.setUpdateUserId(postItem.updateUserID)
    return post
  }

  makeDefaultPost(): tPostItem {
    return defaultPostItem
  }

  getPost(post: Post): tPostItem {
    let j = 0
    this.init()
    while (j < post.getCommentsList().length) {
      const comment = post.getCommentsList()[j]
      this.comments.push(this.cService.getComment(comment))
      j++
    }
    const returnPost = new PostItem(
      post.getId(),
      0,
      // Rstatus[post.getStatus()],
      post.getTitle(),
      post.getContent(),
      post.getTagsList(),
      post.getImage(),
      post.getCreateUserId(),
      post.getCreateUserName(),
      post.getUpdateUserId(),
      post.getUpdateUserName(),
      post.getLikeUsersList(),
      post.getLikeUsersList().length,
      post.getLikeUsersList().includes(usersModule.loginUserId),
      // post.getCommentsList(),
      this.comments,
    )
    if (usersModule.loginUserId < 1) {
      returnPost.likedByLoginUser = false
    }
    return returnPost
  }

  init() {
    this.comments = []
    this.cService = new CommentService()
  }
}

export default PostService

export { postServiceClient }
