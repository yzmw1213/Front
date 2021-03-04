import { Component, Vue, Watch } from "nuxt-property-decorator"
import { messengerModule } from "@/store/modules/message"

@Component({})
export default class Message extends Vue {
  isSuccess: boolean = false

  get showMessenger() {
    return messengerModule.showMessage
  }

  get getMessage() {
    return messengerModule.message
  }

  @Watch(messengerModule.status)
  onChangeStatus() {
    if (messengerModule.status === "SUCCESS") {
      this.isSuccess = true
    } else if (messengerModule.status === "ERROR") {
      this.isSuccess = false
    }
  }
}
