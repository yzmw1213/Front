import { Component, Vue, Prop, Emit } from "nuxt-property-decorator"
import ListPosts from "~/components/Post/List.vue"
import { ReadUserRequest, ReadUserResponse } from "~/grpc/user_pb"
import { UserService, tUserProfileItem, userServiceClient } from "~/service/UserService"
import { usersModule } from "~/store/modules/users"

@Component({
  components: {
    ListPosts,
  }
})

export default class ShowUser extends Vue {
  uService: UserService
  tab: string = "tab-1"
  item: tUserProfileItem = {
    userID: 0,
    userName: "",
    profileText: "",
    authority: 0,
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

  @Prop({ default: "", required: true })
  detailUserId: string

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
    console.log("userID for read", usersModule.userId)
    request.setUserId(usersModule.userId)
    await userServiceClient.readUser(request, {}, (err,res: ReadUserResponse) => {
      if (err != null) {
        this.$setStatusMessage("UNKNOWN_ERROR")
        console.log("err", err)
        return
      }
      const user: any = res.getProfile()
      this.item = this.uService.getUserProfile(user)      
    })
  }

  @Emit("show-user")
  user() {
  }
}
