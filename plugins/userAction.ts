import { Vue } from "nuxt-property-decorator"

import {
  FollowUserRequet,
  UnFollowUserRequet,
} from "~/grpc/user_pb"

import { userServiceClient } from "~/service/UserService"

declare module "vue/types/vue" {
  interface Vue {
    $followUser(follower: number, followed: number): void
    $notFollowUser(follower: number, followed: number): void
  }
}

Vue.prototype.$followUser = (follower: number, followed: number) => {
  const request = new FollowUserRequet()
  request.setFollwerUserId(follower)
  request.setFollwedUserId(followed)

  userServiceClient.followUser(request, {})
}

Vue.prototype.$notFollowUser = (follower: number, followed: number) => {
  const request = new UnFollowUserRequet()
  request.setFollwerUserId(follower)
  request.setFollwedUserId(followed)

  userServiceClient.unFollowUser(request, {})
}
