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
  editedUser: tUserItem = {
    userID: 0,
    userName: "",
    email: "",
    profileText: "",
    password: "",
    authority: 1,
  }

  created() {
    this.uService = new UserService()
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
        this.cancelCreateUser()
      }
    })
  }

  handleCreateUpdateResponse(res: CreateUserResponse, err: Error) {
    if (err != null) {
      // status.codeに応じたダイアログ表示
      this.$setStatusMessage(err.message)
    } else {
      const status: ResponseStatus | undefined = res.getStatus()
      const code = status!.getCode()
      // status.codeに応じたダイアログ表示
      this.$setStatusMessage(code)
    }
  }

  @Emit("do-login")
  cancelCreateUser() {
  }
}
