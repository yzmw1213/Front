import { Component, Vue, Emit } from "nuxt-property-decorator"
import { Error } from "grpc-web"
import { UserKind } from "~/plugins/const"

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
  confirmPassword: string = ""
  // confirmCheck: string = ""
  // confirmMessage: string = "※登録後、ユーザー区分・性別は変更できません。"
  editedUser: tUserItem = {
    userID: 0,
    userName: "abcdefg",
    email: "a@a.com",
    profileText: "",
    password: "abcdefg",
    authority: 1,
  }

  created() {
    this.uService = new UserService()
    console.log(UserKind[1])
    console.log(UserKind[2])
  }

  userKind: tUserkind = UserKind

  post() {
    if (this.confirmPassword !== this.editedUser.password) {
      this.$setStatusMessage("PASSWORD_NOT_SAME_ERROR")
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
      this.$setStatusMessage(err.message)
    } else {
      console.log(res)
      const status: ResponseStatus | undefined = res.getStatus()
      const code = status!.getCode()
      // status.codeに応じたダイアログ表示
      this.$setStatusMessage(code)
    }
  }

  @Emit("back-to-login")
  cancelCreateUser() {
  }
}
