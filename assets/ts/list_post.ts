import { Component, Vue, Emit } from "nuxt-property-decorator"
import { postModule } from "@/store/modules/post"

import PostCard from "~/components/Post/Card.vue"

import {
  ListPostRequest,
  ListPostResponse,
} from "~/grpc/post_pb"

import { postServiceClient, PostService } from "~/service/PostService"

@Component({
  components: {
    PostCard,
  }
})

export default class ShowPosts extends Vue {
  pService: PostService
  posts: any[] = []

  created() {
    this.initialize()
  }

  //  methods
  initialize() {
    this.pService = new PostService()
    this.posts = []
    this.getAllPost()
  }

  getAllPost() {
    // postModule.INIT_POSTS()
    let i = 0
    const request = new ListPostRequest()
    postServiceClient.listPost(request, {}, (err, res: ListPostResponse) => {
      if (err != null) {
        this.$setStatusMessage("UNKNOWN_ERROR")
      }
      while (i < res.getPostList().length) {
        const post = res.getPostList()[i]
        this.posts.push(this.pService.getPost(post))
        i++
      }
    })
    postModule.SET_POSTS(this.posts)
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
