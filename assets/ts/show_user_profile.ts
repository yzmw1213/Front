import { Component, Vue, Prop } from "nuxt-property-decorator"
import ShowPosts from "~/components/ui/ShowPosts.vue"
import Profile from "~/components/ui/Profile.vue"

@Component({
  components: {
    ShowPosts,
    Profile,
  }
})

export default class ShowUserDetail extends Vue {
  tab: string = "tab-1"
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

  // タブに応じて表示するコンポーネントを定義する
  items: { tab: string, component: string, target: string }[] = [
    {
      tab: "PROFILE",
      component: "Profile",
      target: "",
    },
    {
      tab: "POSTS",
      component: "ShowPosts",
      target: "own",
    },
    {
      tab: "LIKE",
      component: "ShowPosts",
      target: "like",
    }
  ]

  @Prop({ default: "", required: true })
  detailUserId: string

  created() {
    console.log(this.detailUserId)
  }

  changeTab(tab: string) {
    this.tab = "tab-" + tab
  }
}
