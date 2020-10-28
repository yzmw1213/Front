import { Mutation, VuexModule, getModule, Module, Action } from "vuex-module-decorators"
import store from "~/store/store"

export interface UsersState {
  token: string
  loginUserId: number
  authority: number
}

@Module({
  dynamic: true,
  store,
  name: "user",
  namespaced: true
})

class Users extends VuexModule implements UsersState {
  token: string = ""
  loginUserId: number = 0
  authority: number = 0

  // mutation
  @Mutation
  public SET_TOKEN(token: string) {
    this.token = token
  }

  // mutation
  @Mutation
  public SET_LOGIN_USER_ID(id: number) {
    this.loginUserId = id
  }

  // mutation
  @Mutation
  public SET_AUTH_KIND(authority: number) {
    this.authority = authority
  }

  @Action
  public logout() {
    this.SET_AUTH_KIND(0)
    this.SET_LOGIN_USER_ID(0)
    this.SET_TOKEN("")
  }
}

export const usersModule = getModule(Users)
