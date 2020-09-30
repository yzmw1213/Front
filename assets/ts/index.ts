import { Component, Vue } from "nuxt-property-decorator"

import Home from "~/components/Home.vue"
import Header from "~/components/ui/Header.vue"
import Footer from "~/components/ui/Footer.vue"
import Login from "~/components/Login.vue"
import CreateTag from "~/components/Tag/Create.vue"
import Post from "~/components/Post/Create.vue"
import SearchForm from "~/components/ui/SearchForm.vue"
import ShowUserProfile from "~/components/ShowUserProfile.vue"

@Component({
  components: {
    Home,
    Header,
    Footer,
    Login,
    Post,
    CreateTag,
    SearchForm,
    ShowUserProfile,
  }
})

export default class Index extends Vue {
  drawer: boolean = false;
  auth: boolean = false;
  currentPage: string = "Home"
  detailUserId: string = ""

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
    this.auth = false
    this.currentPage = "Home"
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

  tagPost() {
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
}
