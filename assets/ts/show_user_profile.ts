import { Component, Vue, Prop, Emit } from "nuxt-property-decorator"
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
  
  @Prop({default: "", required: true})
  detail_user_id: string
  
  created() {
    console.log(this.detail_user_id)
  }
  
  changeTab(tab: string) {
    this.tab = "tab-" + tab
  }
}