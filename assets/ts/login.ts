import { Component, Vue, Emit } from "nuxt-property-decorator"
import { usersModule } from "@/store/modules/users"

import {
  LoginRequest,
  LoginResponse,
} from "~/grpc/user_pb"

import { userServiceClient } from "~/service/UserService"

@Component({})
export default class Login extends Vue {
  // variables
  showEmail: boolean = false
  showPassword: boolean = false
  email: string = "demo@gmail.com"
  demoEmail: string = "demo@abc.com"
  password: string = "demopassword"
  demoPassword: string = "password1234"

  // methods
  login() {
    const request = new LoginRequest()
    request.setEmail(this.email)
    request.setPassword(this.password)
    userServiceClient.login(request, {}, (err, res: LoginResponse | undefined) => {
      if (err != null) {
        // ログインに失敗したことをメッセージ表示
        this.$setStatusMessage("LOGIN_FAIL")
      } else {
        if (res === null) {
          return
        }
        // 入力パスワード、メールアドレスをクリア
        this.password = ""
        this.email = ""

        const auth = res!.getAuth()
        // トークン、ユーザーIDをストアに保存
        usersModule.SET_TOKEN(auth!.getToken())
        usersModule.SET_LOGIN_USER_ID(auth!.getUserId())
        usersModule.SET_AUTH(true)
        // ログインに成功したことをメッセージ表示
        this.$setStatusMessage("LOGIN_SUCCESS")
        this.goHome()
      }
    })
  }

  // トップ画面に遷移
  @Emit("go-home")
  goHome() {
  }

  @Emit("authenticated")
  demoUserLogin() {
    console.log("demo user login")
  }

  @Emit("authenticated")
  demoCompanyLogin() {
    console.log("demo company login")
  }

  @Emit("sign-up")
  createUser() {
  }
}
