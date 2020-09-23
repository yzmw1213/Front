import { Component, Vue, Prop,  Emit } from "nuxt-property-decorator"

@Component({
  components: {
  }
})
  
export default class ShowPosts extends Vue {
  // 今後、apiで取得するようにする。propで取得したuser_idを元に投稿したpostsまたはlikeしたpostsを取得
  posts: { post_id: string,user_id: string, user_name: string, content: string}[] = [
    {
      post_id: "POST00000001",
      user_id: "john1234",
      user_name: "ジョン",
      content: "テキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入ります",
    },
    {
      post_id: "POST00000002",
      user_id: "ben3456",
      user_name: "ベン",
      content: "テキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入りますテキストが入ります",
    }
  ]

  @Prop({default: "", required: false})
  user_id: string
  
  @Prop({default: "", required: false})
  target: string
  
  // 選択されたユーザーIDをEmit
  @Emit('show-user')
  showUser(user_id: string): string {
    return user_id
  }
  
  mounted() {
    console.log("user_id", this.user_id)
    console.log("target", this.target)
    // 投稿を取得する。propで渡されたパラメータに応じて、以下の検索条件を付与する
    // ユーザーによる投稿
    // ユーザーがLIKEした投稿
    // this.posts = ...
  }
}