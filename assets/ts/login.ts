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
  demoUserEmail: string = "demo@gmail.com"
  demoCompanyUserEmail: string = "company@gmail.com"
  demoSuperUserEmail: string = "super@gmail.com"
  password: string = "demopassword"
  demoUserPassword: string = "demopassword"
  demoSuperUserPassword: string = "superpassword"
  demoCompanyUserPassword: string = "companypassword"

  // methods
  login() {
    const request = new LoginRequest()
    console.log(this.email)
    console.log(this.password)
    request.setEmail(this.email)
    request.setPassword(this.password)
    userServiceClient.login(request, {}, (err, res: LoginResponse | undefined) => {
      console.log(res)
      console.log(err)
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
        usersModule.SET_AUTH_KIND(auth!.getAuthority())
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
    this.password = this.demoUserPassword
    this.email = this.demoUserEmail
    this.login()
  }

  demoCompanyLogin() {
    this.password = this.demoCompanyUserPassword
    this.email = this.demoCompanyUserEmail
    this.login()
  }

  demoSuperUserLogin() {
    this.password = this.demoSuperUserPassword
    this.email = this.demoSuperUserEmail
    this.login()
  }

  @Emit("sign-up")
  createUser() {
  }
}
