import { User } from "~/grpc/user_pb"
import { UserServiceClient } from "~/grpc/UserServiceClientPb"

let proxy_server_url: string = ""
const url = process.env.NUXT_ENV_PROXY_SERVER_URL

if (typeof url === "string") {
  proxy_server_url = url
}

// Client credentials
const userServiceClient: UserServiceClient = new UserServiceClient(
  proxy_server_url, {}, {}
)

// tUserItem Formで編集するユーザーの型
export type tUserItem = {
  userID: number
  userName: string
  password: string
  email: string
  gender: number
  confirmPassword: string
  authoriry: number
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
    user.setAuthority(postUser.authoriry)
    user.setGender(postUser.gender)
    return user
  }
}

export { userServiceClient }
