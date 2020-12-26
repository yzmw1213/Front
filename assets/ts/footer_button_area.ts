import { Component, Vue, Prop, Emit } from "nuxt-property-decorator"

@Component({})
export default class FooterButtonArea extends Vue {
  @Emit("go-home")
  goHome() {
  }
}
