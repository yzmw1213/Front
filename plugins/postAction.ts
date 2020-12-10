import { Vue } from "nuxt-property-decorator"
import { usersModule } from "@/store/modules/users"

import {
  LikePostRequest,
  NotLikePostRequest,
} from "~/grpc/post_pb"

import { postServiceClient } from "~/service/PostService"

declare module "vue/types/vue" {
  interface Vue {
    $likePost(postID: number): void
    $notlikePost(postID: number): void
  }
}

Vue.prototype.$likePost = (postID: number) => {
  const request = new LikePostRequest()
  request.setId(postID)
  request.setUserId(usersModule.loginUserId)

  postServiceClient.likePost(request, {})
}

Vue.prototype.$notlikePost = (postID: number) => {
  const request = new NotLikePostRequest()
  request.setId(postID)
  request.setUserId(usersModule.loginUserId)

  postServiceClient.notLikePost(request, {})
}
