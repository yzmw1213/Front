import { Component, Vue, Prop, Emit } from "nuxt-property-decorator"

@Component({
  components: {
  }
})

export default class ShowPosts extends Vue {
  // 今後、apiで取得するようにする。propで取得したuser_idを元に投稿したpostsまたはlikeしたpostsを取得
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

  @Prop({ default: "", required: false })
  userId: string

  @Prop({ default: "", required: false })
  target: string

  // 選択されたユーザーIDをEmit
  @Emit("show-user")
  showUser(userId: string): string {
    return userId
  }

  mounted() {
    console.log("userId", this.userId)
    console.log("target", this.target)
    // 投稿を取得する。propで渡されたパラメータに応じて、以下の検索条件を付与する
    // ユーザーによる投稿
    // ユーザーがLIKEした投稿
    // this.posts = ...
  }
}
