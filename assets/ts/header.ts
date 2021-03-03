import { Component, Vue, Emit } from "nuxt-property-decorator"
import { usersModule } from "@/store/modules/users"
import { postModule } from "@/store/modules/post"
import { UserAuthority } from "~/plugins/const"

@Component({
  components: {
  }
})

export default class Header extends Vue {
  get getAuthKind() {
    return usersModule.authority
  }

  isNormalUser(): boolean {
    return usersModule.authority === UserAuthority.AUTHORITY_NORMAL_USER
  }

  isSuperUser(): boolean {
    return usersModule.authority === UserAuthority.AUTHORITY_SUPER_USER
  }

  @Emit("open-nav")
  openNav() {
  }

  @Emit("go-home")
  home() {
    postModule.CLEAR_EDIT_POST()
  }

  @Emit("do-login")
  login() {
  }

  @Emit("do-logout")
  logout() {
  }

  @Emit("do-post")
  post() {
  }

  @Emit("do-tag")
  tag() {
  }

  @Emit("show-user")
  showAuthUser() {
  }

  @Emit("sign-up")
  signUp() {
  }
}
