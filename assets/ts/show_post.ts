import { Component, Vue, Emit } from "nuxt-property-decorator"
import { postModule } from "@/store/modules/post"
import { usersModule } from "@/store/modules/users"

import { PostService, tPostItem } from "~/service/PostService"

@Component({})
export default class ShowPost extends Vue {
  pService: PostService
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
    likedByLoginUser: false
  }

  created() {
    this.pService = new PostService()
    this.item = postModule.editPost
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
