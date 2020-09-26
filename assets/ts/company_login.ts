import { Component, Vue, Emit } from "nuxt-property-decorator"

@Component({})
export default class CompanyLogin extends Vue {
  // variables
  showEmail: boolean = false
  showPassword: boolean = false
  email: string = ""
  demoEmail: string = "demo@abc.com"
  password: string = ""
  demoPassword: string = "password1234"

  // methods
  @Emit("authenticated")
  login() {
    console.log("login")
  }

  @Emit("authenticated")
  demoLogin() {
    console.log("demo company login")
  }
}

// email, passwordの入力チェック
