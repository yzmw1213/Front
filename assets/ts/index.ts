import { Component, Vue } from "nuxt-property-decorator"
import { usersModule } from "@/store/modules/users"

import Home from "~/components/Home.vue"
import Header from "~/components/ui/Header.vue"
import Footer from "~/components/ui/Footer.vue"
import Message from "~/components/ui/Message.vue"
import Login from "~/components/Login/Login.vue"
import CreateTag from "~/components/Tag/Create.vue"
import ListTag from "~/components/Tag/List.vue"
import Post from "~/components/Post/Create.vue"
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
    Post,
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

  get getAuthState() {
    return usersModule.auth
  }

  // @Emit()
  setHeader() {
    // this.$nuxt.$emit('updateHeader', this.header.title)
  }

  openNav() {
    this.drawer = true
  }

  login() {
    this.drawer = false
    this.currentPage = "Login"
  }

  logout() {
    this.drawer = false
    usersModule.logout()
    this.currentPage = "Home"
    // ログアウトに成功したことをメッセージ表示
    this.$setStatusMessage("LOGOUT_SUCCESS")
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
    this.currentPage = "Post"
  }

  tagList() {
    console.log("tagList")
    this.currentPage = "ListTag"
  }

  tagPost() {
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
