import { Component, Vue, Emit, Watch, Prop } from "nuxt-property-decorator"
import { postModule } from "~/store/modules/post"
import { usersModule } from "~/store/modules/users"

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
  createPosts: any[] = []
  likePosts: any[] = []
  taggedPosts: any[] = []

  created() {
    this.pService = new PostService()
    this.createPosts = []
    this.likePosts = []
    this.taggedPosts = []
    this.initialize()
  }

  //  methods
  initialize() {
    this.posts = []
    this.getPosts()
  }

  getPosts() {
    // postModule.INIT_POSTS()
    let i = 0
    const request = new ListPostRequest()

    if (usersModule.userId > 0) {
      request.setId(usersModule.userId)
      // targetに対応する投稿を取得済みの場合はリクエストを中止する。
      if (this.alreadyHavePostOnTarget(postModule.condition)) {
        return
      } else {
        // targetに対応する投稿を未取得の場合は検索条件をセットし、サーバーへのリクエストを実行する。
        request.setCondition(postModule.condition)
      }
    }

    postServiceClient.listPost(request, {}, (err, res: ListPostResponse) => {
      if (err != null) {
        console.log(err)
      }
      while (i < res.getPostList().length) {
        const post = res.getPostList()[i]
        this.posts.push(this.pService.getPost(post))
        i++
      }
    })
    this.setPostsOnTarget(this.tab)
    postModule.SET_POSTS(this.posts)
  }

  // ターゲットに対応するオブジェクトが取得済みか判定
  alreadyHavePostOnTarget(condition: string): boolean {
    switch (condition) {
      case "create":
        this.posts = this.createPosts
        break
      case "like":
        this.posts = this.likePosts
        break
    }
    return this.posts.length > 0
  }

  // ターゲットに対応する投稿をsetする
  setPostsOnTarget(condition: string) {
    switch (condition) {
      case "create":
        this.createPosts = this.posts
        break
      case "like":
        this.likePosts = this.posts
        break
    }
  }

  @Prop({ default: "create", required: false })
  tab: string

  @Watch("tab")
  onChangeTarget() {
    this.getPosts()
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
