import { User } from "~/grpc/user_pb"
import { UserServiceClient } from "~/grpc/UserServiceClientPb"

// Client credentials
const userServiceClient: UserServiceClient = new UserServiceClient(
  "http://localhost:8080", {}, {}
)

// tUserItem Formで編集するユーザーの型
export type tUserItem = {
  userID: number
  userName: string
  email: string
  gender: number
  password: string
  confirmPassword: string
  // profileContent: string
  kind: number
  isSuper: boolean
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
    user.setKind(postUser.kind)
    user.setGender(postUser.gender)
    user.setIsSuper(postUser.isSuper)
    return user
  }
}

export { userServiceClient }
