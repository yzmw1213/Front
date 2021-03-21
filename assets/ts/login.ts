import { Component, Vue, Emit } from "nuxt-property-decorator"
import { usersModule } from "@/store/modules/users"

import {
  LoginRequest,
  GuestLoginRequest,
  SuperUserLoginRequest,
  LoginResponse,
} from "~/grpc/user_pb"

import { userServiceClient } from "~/service/UserService"

@Component({})
export default class Login extends Vue {
  // variables
  showPassword: boolean = false
  email: string = ""
  demoUserEmail: string = "demo@gmail.com"
  demoSuperUserEmail: string = "super@gmail.com"
  password: string = ""
  demoUserPassword: string = "password"
  demoSuperUserPassword: string = "password"

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
        this.loginSuccess(res!)
      }
    })
  }

  guestUserLogin() {
    const request = new GuestLoginRequest()
    userServiceClient.guestLogin(request, {}, (err, res: LoginResponse | undefined) => {
      if (err != null) {
        // ログインに失敗したことをメッセージ表示
        this.$setStatusMessage("LOGIN_FAIL")
      } else {
        if (res === null) {
          return
        }
        this.loginSuccess(res!)
      }
    })
  }

  superUserLogin() {
    const request = new SuperUserLoginRequest()
    userServiceClient.superUserLogin(request, {}, (err, res: LoginResponse | undefined) => {
      if (err != null) {
        // ログインに失敗したことをメッセージ表示
        this.$setStatusMessage("LOGIN_FAIL")
      } else {
        if (res === null) {
          return
        }
        this.loginSuccess(res!)
      }
    })
  }

  loginSuccess(res: LoginResponse) {
    const auth = res.getAuth()
    const user = res.getUser()
    // トークン、ユーザーIDをストアに保存
    usersModule.SET_TOKEN(auth!.getToken())
    usersModule.SET_LOGIN_USER_ID(auth!.getUserId())
    usersModule.SET_AUTH_KIND(auth!.getAuthority())
    // ユーザー名をストアに保存
    usersModule.SET_LOGIN_USER_NAME(user!.getUserName())
    usersModule.SET_LOGIN_USER_EMAIL(user!.getEmail())
    // ログインに成功したことをメッセージ表示
    this.$setStatusMessage("LOGIN_SUCCESS")
    this.goHomeAfterLogin()
  }

  @Emit("sign-up")
  createUser() {
  }

  // トップ画面に遷移
  @Emit("go-home")
  goHome() {
  }

  // トップ画面に遷移
  @Emit("authenticated")
  goHomeAfterLogin() {
  }
}
