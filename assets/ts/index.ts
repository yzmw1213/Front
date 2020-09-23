import { Component, Vue } from "nuxt-property-decorator"

import Home from "~/components/Home.vue"
import Header from "~/components/ui/Header.vue"
import Footer from "~/components/ui/Footer.vue"
import Login from "~/components/Login.vue"
import ShowUserProfile from "~/components/ShowUserProfile.vue"

@Component({
  components: {
    Home,
    Header,
    Footer,
    Login,
    ShowUserProfile,
  }
})

export default class Index extends Vue {
  drawer: boolean = false;
  auth: boolean = false;
  currentPage: string = "Home"
  detail_user_id: string = ""
  
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
  
  search(inputVal: any) {
    console.log("search func on index")
    console.log(inputVal)
  }
  
  user(id: string) {
    this.currentPage = "ShowUserProfile"
    this.detail_user_id = id
    console.log(id)
  }
  
}
