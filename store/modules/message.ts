import { Mutation, MutationAction, Action, VuexModule, getModule, Module } from "vuex-module-decorators"
import store from "~/store/store"

export interface MessageState {
  message: string
  status: string
}
@Module({
  dynamic: true,
  store,
  name: "message",
  namespaced: true
})

class Message extends VuexModule implements MessageState {
  // state
  message: string = ""
  status: string = ""
  showMessage: boolean = false
  // mutation
  @Mutation
  public SET_MESSAGE(messageVal: string, statusVal: string) {
    this.message = messageVal
    this.status = statusVal
    this.showMessage = true
    setTimeout(() => (this.showMessage = false), 7000)
  }

  // action
  @Action({})
  public REMOVE_MESSAGE() {
    this.SET_MESSAGE("", "")
  }

  @MutationAction({ mutate: ["message"] })
  async resetMessenger() {
    return {
      message: ""
    }
  }
}

export const messengerModule = getModule(Message)