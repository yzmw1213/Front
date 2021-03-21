import { Component, Vue, Emit, Watch } from "nuxt-property-decorator"
import ListPosts from "~/components/Post/List.vue"
import { ReadUserRequest, ReadUserResponse } from "~/grpc/user_pb"
import { UserService, tUserProfileItem, userServiceClient } from "~/service/UserService"
import { postModule } from "~/store/modules/post"
import { usersModule } from "~/store/modules/users"

import UpdateUserDialog from "~/components/ui/UpdateUserDialog.vue"
import DeleteUserDialog from "~/components/ui/DeleteUserDialog.vue"

@Component({
  components: {
    ListPosts,
    UpdateUserDialog,
    DeleteUserDialog,
  }
})

export default class ShowUser extends Vue {
  uService: UserService
  // 選択中のタブ
  tab: number = 0
  target: string = "create"
  item: tUserProfileItem = {
    userID: 0,
    userName: "",
    profileText: "",
    authority: 0,
    isLoginUser: false,
    followByLoginUser: false
  }

  // タブに応じて表示するコンポーネントを定義する
  tabs: { name: string, target: string }[] = [
    {
      name: "投稿",
      target: "create",
    },
    {
      name: "お気に入り",
      target: "like",
    }
  ]

  get loginUserAuthority() {
    return usersModule.authority
  }

  created() {
    this.uService = new UserService()
    this.initialize()
  }

  initialize() {
    this.item.userID = 0
    this.getUser()
  }

  async getUser() {
    const request = new ReadUserRequest()
    request.setUserId(usersModule.userId)

    await userServiceClient.readUser(request, {}, (err, res: ReadUserResponse) => {
      if (err != null) {
        this.$setStatusMessage("UNKNOWN_ERROR")
        return
      }
      const user: any = res.getProfile()
      this.item = this.uService.getUserProfile(user)
    })
  }

  // ユーザーに対するフォロー状態の更新
  changeFollowStatus() {
    if (usersModule.loginUserId < 1) {
      // まだログインして無い場合、ログイン画面に遷移
      this.moveToLogin()
      return
    }
    // フォローを取り消す
    if (this.item.followByLoginUser === true) {
      this.$notFollowUser(usersModule.loginUserId, this.item.userID)
      this.item.followByLoginUser = false
    // フォローする
    } else {
      this.$followUser(usersModule.loginUserId, this.item.userID)
      this.item.followByLoginUser = true
    }
  }

  @Watch("tab")
  onChangeStatus() {
    this.target = this.tabs[this.tab].target
    postModule.SET_CONDITION(this.tabs[this.tab].target)
  }

  @Emit("show-post")
  post() {
  }

  @Emit("show-user")
  user() {
  }

  @Emit("do-login")
  moveToLogin() {
  }
}
