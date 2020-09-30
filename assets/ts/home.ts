import { Component, Vue, Emit } from "nuxt-property-decorator"
import ShowPosts from "~/components/Post/Show.vue"
@Component({
  components: {
    ShowPosts,
  }
})

export default class Home extends Vue {
  posts: { postId: string, userId: string, userName: string, content: string}[] = [
    {
      postId: "POST00000001",
      userId: "john1234",
      userName: "ジョン",
      content: "テキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入ります",
    },
    {
      postId: "POST00000002",
      userId: "ben3456",
      userName: "ベン",
      content: "テキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入ります",
    }
  ]

  // 選択されたユーザーIDをEmit
  @Emit("show-user")
  showUser(userId: string): string {
    return userId
  }

  mounted() {
    console.log(this.posts)
  }
}
