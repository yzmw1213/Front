import { Vue } from "nuxt-property-decorator"
import Vuex from "vuex"
import { MessageState } from "@/store/modules/message"
import { TagsState } from "@/store/modules/tags"
Vue.use(Vuex)

export interface State {
  message: MessageState
  tags: TagsState
}
export default new Vuex.Store<State>({})
