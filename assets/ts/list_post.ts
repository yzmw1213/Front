import { Component, Vue, Prop, Emit } from "nuxt-property-decorator"
import { usersModule } from "@/store/modules/users"
import { postModule } from "@/store/modules/post"

import {
  ListPostRequest,
  ListPostResponse,
} from "~/grpc/post_pb"

import { tPostItem, postServiceClient, PostService } from "~/service/PostService"

@Component({})
export default class ShowPosts extends Vue {
  pService: PostService
  posts: any[] = []

  created() {
    this.initialize()
  }

  //  methods
  initialize() {
    this.pService = new PostService()
    this.posts = []
    this.getAllPost()
  }

  getAllPost() {
    let i = 0
    const request = new ListPostRequest()
    postServiceClient.listPost(request, {}, (err, res: ListPostResponse) => {
      if (err != null) {
        this.$setStatusMessage("UNKNOWN_ERROR")
      }
      while (i < res.getPostList().length) {
        const post = res.getPostList()[i]
        this.posts.push(this.pService.getPost(post))
        i++
      }
    })
  }

  // 投稿に対するお気に入り情報の更新
  changeLikeStatus(post: tPostItem, i: number) {
    if (usersModule.loginUserId < 1) {
      // まだログインして無い場合、ログイン画面に遷移
      this.moveToLogin()
      return
    }
    // likeを取り消す
    if (this.posts[i].likedByLoginUser === true) {
      this.$notlikePost(post.postID)
      this.posts[i].likeUsersNum--
      this.posts[i].likedByLoginUser = false
    // likeする
    } else {
      this.$likePost(post.postID)
      this.posts[i].likeUsersNum++
      this.posts[i].likedByLoginUser = true
    }
  }

  @Emit("show-post")
  showItem(item: tPostItem) {
    postModule.SET_EDIT_POST(Object.assign({}, item))
  }

  @Emit("do-login")
  moveToLogin() {
  }

  @Prop({ default: "", required: false })
  userId: string

  @Prop({ default: "", required: false })
  target: string

  // 選択されたユーザーIDをEmit
  @Emit("show-user")
  showUser(userId: string): string {
    return userId
  }
}
