import { Component, Vue } from "nuxt-property-decorator"
import { usersModule } from "@/store/modules/users"
import { UserAuthority } from "~/plugins/const"

import Home from "~/components/Home.vue"
import Header from "~/components/ui/Header.vue"
import Footer from "~/components/ui/Footer.vue"
import Message from "~/components/ui/Message.vue"
import Login from "~/components/Login/Login.vue"
import ListUser from "~/components/User/List.vue"
import CreateTag from "~/components/Tag/Create.vue"
import ListTag from "~/components/Tag/List.vue"
import CreatePost from "~/components/Post/Create.vue"
import SignUp from "~/components/Login/SignUp.vue"
import SearchForm from "~/components/ui/SearchForm.vue"
import ShowUserProfile from "~/components/ShowUserProfile.vue"

@Component({
  components: {
    Home,
    Header,
    Footer,
    Message,
    Login,
    ListUser,
    CreatePost,
    CreateTag,
    ListTag,
    SignUp,
    SearchForm,
    ShowUserProfile,
  }
})

export default class Index extends Vue {
  drawer: boolean = false;
  auth: boolean = false;
  currentPage: string = "Home"
  detailUserId: string = ""

  get getAuthKind() {
    return usersModule.authority
  }

  isNormalUser(): boolean {
    return usersModule.authority === UserAuthority.AUTHORITY_NORMAL_USER
  }

  isSuperUser(): boolean {
    return usersModule.authority === UserAuthority.AUTHORITY_SUPER_USER
  }

  // @Emit()
  setHeader() {
    // this.$nuxt.$emit('updateHeader', this.header.title)
  }

  openNav() {
    this.drawer = true
  }

  userLogin() {
    this.drawer = false
    this.currentPage = "Login"
  }

  logout() {
    this.drawer = false
    usersModule.logout()
    // ログアウトに成功したことをメッセージ表示
    this.$setStatusMessage("LOGOUT_SUCCESS")
    this.currentPage = "Login"
  }

  authed() {
    this.currentPage = "Home"
    this.auth = true
  }

  home() {
    this.drawer = false
    this.currentPage = "Home"
  }

  post() {
    this.drawer = false
    this.currentPage = "CreatePost"
  }

  listUser() {
    this.drawer = false
    this.currentPage = "ListUser"
  }

  listTag() {
    this.drawer = false
    this.currentPage = "ListTag"
  }

  createTag() {
    this.drawer = false
    this.currentPage = "CreateTag"
  }

  search(inputVal: any) {
    console.log("search func on index")
    console.log(inputVal)
  }

  user(id: string) {
    this.drawer = false
    this.currentPage = "ShowUserProfile"
    this.detailUserId = id
    console.log(id)
  }

  signUp() {
    this.drawer = false
    this.currentPage = "SignUp"
  }
}
