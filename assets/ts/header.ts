import { Component, Vue, Emit, Prop } from "nuxt-property-decorator"

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

  @Emit("open-nav")
  openNav() {
  }

  @Emit("do-search")
  searchEvent(value: any) {
    return value
  }

  @Emit("do-login")
  login() {
  }

  @Emit("do-company-login")
  companyLogin() {
  }

  @Emit("do-logout")
  logout() {
  }

  @Emit("show-user")
  showAuthUser() {
  }
}
