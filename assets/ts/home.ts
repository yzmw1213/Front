import { Component, Vue, Emit } from "nuxt-property-decorator"
import ShowPosts from "~/components/Post/Show.vue"
@Component({
  components: {
    ShowPosts,
  }
})

export default class Home extends Vue {
  // 選択されたユーザーIDをEmit
  @Emit("show-user")
  showUser(userId: string): string {
    return userId
  }

  @Emit("do-login")
  moveToLogin() {
  }
}
