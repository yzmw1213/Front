import { Component, Vue, Prop, Emit } from "nuxt-property-decorator"
import { usersModule } from "@/store/modules/users"
import { postModule } from "@/store/modules/post"

import { tPostItem, PostService } from "~/service/PostService"

@Component({})
export default class PostCard extends Vue {
  pService: PostService

  @Prop({ default: "", required: true })
  post: tPostItem

  created() {
    this.initialize()
  }

  //  methods
  initialize() {
    this.pService = new PostService()
    // this.posts = []
    // this.getAllPost()
  }

  // 投稿に対するお気に入り情報の更新
  changeLikeStatus(post: tPostItem) {
    if (usersModule.loginUserId < 1) {
      // まだログインして無い場合、ログイン画面に遷移
      this.moveToLogin()
      return
    }
    // likeを取り消す
    if (this.post.likedByLoginUser === true) {
      this.$notlikePost(post.postID)
      this.post.likeUsersNum--
      this.post.likedByLoginUser = false
    // likeする
    } else {
      this.$likePost(post.postID)
      this.post.likeUsersNum++
      this.post.likedByLoginUser = true
    }
  }

  @Emit("show-post")
  showItem(item: tPostItem) {
    postModule.SET_EDIT_POST(Object.assign({}, item))
  }

  @Emit("do-login")
  moveToLogin() {
  }

  selectUser(userId: number) {
    this.showUser(userId)
  }

  // 選択されたユーザーIDをEmit
  @Emit("show-user")
  showUser(id: number) {
    usersModule.SET_USER_ID(id)
  }
}
