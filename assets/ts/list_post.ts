import { Component, Vue, Emit, Watch, Prop } from "nuxt-property-decorator"
import { postModule } from "~/store/modules/post"
import { usersModule } from "~/store/modules/users"

import PostCard from "~/components/Post/Card.vue"

import { PostService } from "~/service/PostService"

@Component({
  components: {
    PostCard,
  }
})

export default class ShowPosts extends Vue {
  pService: PostService

  created() {
    this.pService = new PostService()
    this.initialize()
  }

  mounted() {
    // this.$nuxt.$on("doSearch", this.searchPosts)
  }

  get posts() {
    return postModule.posts
  }

  //  methods
  initialize() {
    // this.posts = []
    if (postModule.condition === "create") {
      postModule.getPostsByCreateUserID(usersModule.userId)
      // this.$store.dispatch("post/getPostsByCreateUserID",usersModule.userId)
    } else if (postModule.condition === "like") {
      postModule.getPostsByLikeUserID(usersModule.userId)
      console.log("get like Posts")
    } else if (postModule.condition === "search") {
      // this.searchPosts()
    } else if (postModule.condition === "tag") {
      console.log("tag")
    } else {
      postModule.getAllPosts()
      // await this.$store.dispatch("post/getAllPosts")
    }
  }

  @Prop({ default: "create", required: false })
  tab: string

  @Watch("tab")
  onChangeTarget() {
    console.log("tab")
    // this.getPosts()
    this.initialize()
  }

  @Emit("show-post")
  showPost() {
  }

  @Emit("do-login")
  moveToLogin() {
  }

  // 選択されたユーザーIDをEmit
  @Emit("show-user")
  showUser() {
  }
}
