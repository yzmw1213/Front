import { Component, Emit, Vue } from "nuxt-property-decorator"
import { UserService, userServiceClient, tUserItem } from "~/service/UserService"
import { postModule } from "~/store/modules/post"
import { usersModule } from "~/store/modules/users"

import {
  UpdateUserRequest,
  UpdateUserResponse,
  ResponseStatus,
} from "~/grpc/user_pb"

@Component({})
export default class UpdateUserDialog extends Vue {
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

  update() {
    const request = new UpdateUserRequest()
    const user = this.uService.makeUser(this.editedUser)
    request.setUser(user)
    userServiceClient.updateUser(request, {}, (err, res: UpdateUserResponse) => {
      if (err != null) {
        // status.codeに応じたダイアログ表示
        this.$setStatusMessage(err.message)
      } else {
        const status: ResponseStatus | undefined = res.getStatus()
        const code = status!.getCode()
        // status.codeに応じたダイアログ表示
        this.$setStatusMessage(code)
        usersModule.SET_LOGIN_USER_NAME(this.editedUser.userName)
        postModule.getPostsByCreateUserID(usersModule.userId)
        // reflesh
        this.reload()
      }
      this.dialog = false
    })
  }

  @Emit("reload")
  reload() {
  }
}
