import { User, UserProfile } from "~/grpc/user_pb"
import { UserProfileItem } from "~/assets/ts/constructor/UserItem"
import { UserServiceClient } from "~/grpc/UserServiceClientPb"

let proxyServerUrl: string = ""
const url = process.env.NUXT_ENV_PROXY_SERVER_URL

if (typeof url === "string") {
  proxyServerUrl = url
}

// Client credentials
const userServiceClient: UserServiceClient = new UserServiceClient(
  proxyServerUrl, {}, {}
)

// tUserItem Formで編集するユーザーの型
export type tUserItem = {
  userID: number
  userName: string
  password: string
  profileText: string
  email: string
  gender: number
  authority: number
}

// tUserProfileItem ユーザープロフィール閲覧で表示する情報の型
export type tUserProfileItem = {
  userID: number
  userName: string
  profileText: string
  gender: number
  authority: number
}

// Userkind ユーザー種類の型
export type tUserkind = {
  [kind: number]: string
}

export class UserService {
  makeUser(postUser: tUserItem): User {
    const user = new User()
    user.setUserId(postUser.userID)
    user.setEmail(postUser.email)
    user.setPassword(postUser.password)
    user.setUserName(postUser.userName)
    user.setAuthority(postUser.authority)
    user.setGender(postUser.gender)
    user.setProfileText(postUser.profileText)
    return user
  }

  // getUserProfile バイナリ型のユーザーメッセージをvueで扱える形に変換
  // getUser(user: User): tUserItem {
  //   return new UserItem(
  //     user.getUserId(),
  //     user.getUserName(),
  //     user.getPassword(),
  //     user.getProfileText(),
  //     user.getEmail(),
  //     user.getGender(),
  //     user.getAuthority(),
  //   )
  // }

  // getUserProfile バイナリ型のプロフィールメッセージをvueで扱える形に変換
  getUserProfile(profile: UserProfile): tUserProfileItem {
    return new UserProfileItem(
      profile.getUserId(),
      profile.getUserName(),
      profile.getProfileText(),
      profile.getAuthority(),
      profile.getGender(),
    )
  }
}

export default UserService

export { userServiceClient }
