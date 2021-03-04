import { Component, Vue } from "nuxt-property-decorator"
import { postModule } from "~/store/modules/post"
import { tagsModule } from "~/store/modules/tags"
import { usersModule } from "@/store/modules/users"
import { UserAuthority } from "~/plugins/const"

import Home from "~/components/Home.vue"
import Header from "~/components/ui/Header.vue"
import Footer from "~/components/ui/Footer.vue"
import FooterButtonArea from "~/components/ui/FooterButtonArea.vue"
import Message from "~/components/ui/Message.vue"
import Login from "~/components/Login/Login.vue"
import CreateTag from "~/components/Tag/Create.vue"
import ListTag from "~/components/Tag/List.vue"
import CreatePost from "~/components/Post/Create.vue"
import SignUp from "~/components/Login/SignUp.vue"
import SearchDialog from "~/components/ui/SearchDialog.vue"
import ShowPost from "~/components/Post/Show.vue"
import ShowUser from "~/components/User/ShowUser.vue"

@Component({
  components: {
    Home,
    Header,
    Footer,
    FooterButtonArea,
    Message,
    Login,
    CreatePost,
    CreateTag,
    ListTag,
    SignUp,
    SearchDialog,
    ShowPost,
    ShowUser,
  }
})

export default class Index extends Vue {
  drawer: boolean = false;
  auth: boolean = false;
  showSearchDialogButton: boolean = true
  showSearchDialog: boolean = true
  showFooterButton: boolean = false
  currentPage: string = "Home"
  detailUserId: string = ""

  get getAuthKind() {
    return usersModule.authority
  }

  get validTags() {
    return tagsModule.validTags
  }

  created() {
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
    this.showSearchDialog = false
    this.showFooterButton = false
    this.currentPage = "Login"
  }

  logout() {
    this.drawer = false
    usersModule.logout()
    // ログアウトに成功したことをメッセージ表示
    this.$setStatusMessage("LOGOUT_SUCCESS")
    this.showSearchDialog = false
    this.showFooterButton = false
    this.currentPage = "Login"
  }

  authed() {
    this.currentPage = "Home"
    this.showSearchDialog = true
    this.showFooterButton = false
    this.auth = true
  }

  home() {
    this.drawer = false
    this.showFooterButton = false
    this.showSearchDialog = true
    this.currentPage = "Home"
    postModule.SET_CONDITION("")
    usersModule.SET_USER_ID(0)
  }

  post() {
    this.drawer = false
    this.showSearchDialog = false
    this.showFooterButton = false
    this.currentPage = "CreatePost"
  }

  listUser() {
    this.drawer = false
    this.showFooterButton = true
    this.currentPage = "ListUser"
  }

  listTag() {
    this.drawer = false
    this.showSearchDialog = false
    this.showFooterButton = true
    this.currentPage = "ListTag"
  }

  createTag() {
    this.drawer = false
    this.showSearchDialog = false
    this.showFooterButton = false
    this.currentPage = "CreateTag"
  }

  showPost() {
    this.currentPage = "ShowPost"
    this.showSearchDialog = false
    this.showFooterButton = true
  }

  // ユーザー詳細画面
  user() {
    this.drawer = false
    this.currentPage = "ShowUser"
    this.showSearchDialog = false
    this.showFooterButton = true
    // ユーザーページ遷移時は、ユーザーが作成した投稿を表示
    postModule.SET_CONDITION("create")
  }

  // マイページ表示
  myPage() {
    usersModule.SET_USER_ID(usersModule.loginUserId)
    // ユーザーページ遷移時は、ユーザーが作成した投稿を表示
    this.user()
  }

  signUp() {
    this.drawer = false
    this.currentPage = "SignUp"
    this.showSearchDialog = false
    this.showFooterButton = false
  }
}
