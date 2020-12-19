import { Component, Vue, Emit, Prop } from "nuxt-property-decorator"
import { usersModule } from "@/store/modules/users"
import { postModule } from "@/store/modules/post"
import { UserAuthority } from "~/plugins/const"

import SearchForm from "~/components/ui/SearchForm.vue"
@Component({
  components: {
    SearchForm,
  }
})

export default class Header extends Vue {
  searchValue: string = ""

  @Prop({ default: false, required: true })
  authed: boolean

  items: { title: string}[] = [
    { title: "Click Me" },
    { title: "Click Me" },
    { title: "Click Me" },
    { title: "Click Me 2" },
  ];

  get getAuthKind() {
    return usersModule.authority
  }

  isCompanyUser(): boolean {
    return usersModule.authority === UserAuthority.AUTHORITY_COMPANY_USER
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

  @Emit("do-search")
  searchEvent(value: any) {
    return value
  }

  @Emit("do-login")
  login() {
  }

  @Emit("do-logout")
  logout() {
  }

  @Emit("show-user")
  showAuthUser() {
  }

  @Emit("sign-up")
  signUp() {
  }
}
