import { User, UserProfile } from "~/grpc/user_pb"
import { UserProfileItem } from "~/assets/ts/constructor/UserItem"
import { UserServiceClient } from "~/grpc/UserServiceClientPb"
import { usersModule } from "~/store/modules/users"

let proxyServerUrl: string = ""

const url = process.env.NODE_ENV === "production" ? process.env.NUXT_ENV_API_DNS : "http://localhost:8080"

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
  authority: number
}

// tUserProfileItem ユーザープロフィール閲覧で表示する情報の型
export type tUserProfileItem = {
  userID: number
  userName: string
  profileText: string
  email: string
  authority: number,
  isLoginUser: boolean,
  followByLoginUser: boolean,
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
    user.setProfileText(postUser.profileText)
    return user
  }

  // getUserProfile バイナリ型のプロフィールメッセージをvueで扱える形に変換
  getUserProfile(profile: UserProfile): tUserProfileItem {
    return new UserProfileItem(
      profile.getUserId(),
      profile.getUserName(),
      profile.getProfileText(),
      profile.getUserId() === usersModule.loginUserId ? usersModule.loginUserEmail : "",
      profile.getAuthority(),
      profile.getUserId() === usersModule.loginUserId,
      profile.getFollowUsersList().includes(usersModule.loginUserId),
    )
  }
}

export default UserService

export { userServiceClient }
