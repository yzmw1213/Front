import { Component, Vue, Emit } from "nuxt-property-decorator"

@Component({})
export default class Login extends Vue {
  // variables
  showEmail: boolean = false
  showPassword: boolean = false
  email: string = "aaa@aaa.com"
  demoEmail: string = "demo@abc.com"
  password: string = "123dfgt3"
  demoPassword: string = "password1234"

  // methods
  @Emit("authenticated")
  login() {
    console.log("login")
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

// email, passwordの入力チェック
