import { Component, Vue, Emit, Watch } from "nuxt-property-decorator"
import { Error } from "grpc-web"
import { Sex, UserKind } from "~/plugins/const"

import {
  CreateUserRequest,
  CreateUserResponse,
  ResponseStatus,
  User,
} from "~/grpc/user_pb"

import { tUserkind, userServiceClient, UserService, tUserItem } from "~/service/UserService"

@Component({})
export default class SignUp extends Vue {
  uService: UserService
  showPassword: boolean = false
  showConfirmPassword: boolean = false
  editedUser: tUserItem = {
    userID: 0,
    userName: "abcdefg",
    email: "a@a.com",
    gender: 1,
    password: "abcdefg",
    confirmPassword: "abcdefg",
    kind: 1,
    isSuper: false
  }

  created() {
    this.uService = new UserService()
    console.log(UserKind[1])
    console.log(UserKind[2])
    console.log(this.sex)
  }

  userKind: tUserkind = UserKind
  sex: typeof Sex = Sex

  post() {
    if (this.editedUser.confirmPassword !== this.editedUser.password) {
      this.showDialog("PASSWORD_NOT_SAME_ERROR")
      return
    }
    const user = this.uService.makeUser(this.editedUser)
    this.create(user)
  }

  create(user: User) {
    const request = new CreateUserRequest()
    request.setUser(user)
    userServiceClient.createUser(request, {}, (err, res: CreateUserResponse) => {
      this.handleCreateUpdateResponse(res, err)
      if (err == null) {
        console.log("go login")
        this.cancelCreateUser()
      }
    })
  }

  handleCreateUpdateResponse(res: CreateUserResponse, err: Error) {
    if (err != null) {
      console.log(err.message)
      // status.codeに応じたダイアログ表示
      this.showDialog(err.message)
    } else {
      console.log(res)
      const status: ResponseStatus | undefined = res.getStatus()
      const code = status.getCode()
      // status.codeに応じたダイアログ表示
      this.showDialog(code)
    }
  }

  showDialog(code: string) {
    this.$setStatusMessage(code)
  }

  @Emit("back-to-login")
  cancelCreateUser() {
  }

  @Watch("editedUser.kind")
  onChangeStatus() {
    // 企業が選ばれた場合、性別には0を設定する
    if (this.editedUser.kind === 2) {
      this.editedUser.gender = 0
    }
  }
}
