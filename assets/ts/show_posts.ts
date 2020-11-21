import { Component, Vue, Prop, Emit } from "nuxt-property-decorator"

import {
  ListPostRequest,
  ListPostResponse,
} from "~/grpc/post_pb"

import { postServiceClient, PostService } from "~/service/PostService"

@Component({})
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
    console.log("getAllPost")
    let i = 0
    const request = new ListPostRequest()
    postServiceClient.listPost(request, {}, (err, res: ListPostResponse) => {
      console.log("res", res)
      if (err != null) {
        this.$setStatusMessage("UNKNOWN_ERROR")
      }
      while (i < res.getPostList().length) {
        this.posts.push(this.pService.getPost(res.getPostList()[i]))
        i++
      }
    })
  }

  @Prop({ default: "", required: false })
  userId: string

  @Prop({ default: "", required: false })
  target: string

  // 選択されたユーザーIDをEmit
  @Emit("show-user")
  showUser(userId: string): string {
    return userId
  }
}
