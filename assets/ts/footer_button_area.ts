import { Component, Vue, Emit } from "nuxt-property-decorator"

@Component({})
export default class FooterButtonArea extends Vue {
  @Emit("go-home")
  goHome() {
  }
}
