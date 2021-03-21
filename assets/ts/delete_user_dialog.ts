import { Component, Emit, Vue } from "nuxt-property-decorator"
import { UserService, userServiceClient, tUserItem } from "~/service/UserService"
import { usersModule } from "~/store/modules/users"

import {
  DeleteUserRequest,
  DeleteUserResponse,
  ResponseStatus,
} from "~/grpc/user_pb"

@Component({})
export default class DeleteUserDialog extends Vue {
  uService: UserService
  dialog: boolean = false

  editedUser: tUserItem = {
    userID: usersModule.loginUserId,
    userName: usersModule.loginUserName,
    email: usersModule.loginUserEmail,
    profileText: "",
    password: "",
    authority: usersModule.authority,
  }

  created() {
    this.uService = new UserService()
  }

  confirmDelete() {
    const request = new DeleteUserRequest()
    request.setUserId(usersModule.loginUserId)
    userServiceClient.deleteUser(request, {}, (err, res: DeleteUserResponse) => {
      if (err != null) {
        console.log(err.message)
        // status.codeに応じたダイアログ表示
        this.$setStatusMessage(err.message)
      } else {
        const status: ResponseStatus | undefined = res.getStatus()
        const code = status!.getCode()
        // status.codeに応じたダイアログ表示
        this.$setStatusMessage(code)
        // ログアウト
        usersModule.logout()
        this.logut()
      }
    })
    this.dialog = false
  }

  @Emit("logout")
  logut() {
  }
}
