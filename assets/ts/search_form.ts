import { Component, Vue, Emit, Prop, Watch } from "nuxt-property-decorator"

@Component({})
export default class SearchForm extends Vue {
  // variables
  inputValue: string = ""
  loading: boolean = false

  @Emit("search")
  search() {
    // loading-circularを表示
    this.loading = !this.loading

    // loading-circularを非表示
    setTimeout(this.stopLoading, 3000)
    return this.inputValue
  }

  stopLoading() {
    this.loading = false
  }

  @Prop({ default: false, required: false })
  navDrawer: boolean

  @Watch("navDrawer")
  onWatchChanged(drawer: boolean) {
    if (drawer === false) {
      this.inputValue = ""
    }
  }
}
