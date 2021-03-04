import { Component, Vue, Emit } from "nuxt-property-decorator"
import ListPosts from "~/components/Post/List.vue"

@Component({
  components: {
    ListPosts,
  }
})

export default class Home extends Vue {
  // 選択されたユーザーIDをEmit
  @Emit("show-user")
  showUser(userId: string): string {
    return userId
  }

  @Emit("show-post")
  showPost() {
  }

  @Emit("do-login")
  moveToLogin() {
  }
}
