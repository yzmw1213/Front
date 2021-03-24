import { Component, Vue, Emit, Watch, Prop } from "nuxt-property-decorator"
import { postModule } from "~/store/modules/post"
import { usersModule } from "~/store/modules/users"
import { tagsModule } from "~/store/modules/tags"

import PostCard from "~/components/Post/Card.vue"

import { PostService } from "~/service/PostService"

@Component({
  components: {
    PostCard,
  }
})

export default class ShowPosts extends Vue {
  vt: string[] = []
  pService: PostService

  get validTags() {
    return tagsModule.validTags
  }

  get posts() {
    return postModule.posts
  }

  get searchTag() {
    return tagsModule.searchTagID
  }

  mounted() {
    for (const tag of tagsModule.validTags) {
      this.vt[tag.key] = tag.text
    }
    this.pService = new PostService()
    this.initialize()
  }

  //  methods
  initialize() {
    if (postModule.condition === "create") {
      postModule.getPostsByCreateUserID(usersModule.userId)
    } else if (postModule.condition === "like") {
      postModule.getPostsByLikeUserID(usersModule.userId)
    } else if (tagsModule.searchTagID > 0) {
      postModule.getPostsByTagID(tagsModule.searchTagID)
    } else {
      postModule.getAllPosts()
    }
  }

  @Prop({ default: "create", required: false })
  tab: string

  @Watch("tab")
  onChangeTarget() {
    this.initialize()
  }

  @Watch(String(tagsModule.searchTagID))
  onChangeStatus() {
    console.log("search tag change", tagsModule.searchTagID)
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
