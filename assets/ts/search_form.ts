import { Component, Vue, Emit } from "nuxt-property-decorator"

@Component({})
export default class SearchForm extends Vue {
  // variables
  inputValue: string = ""
  loading: boolean = false
  
  @Emit('search')
  search() {
    // loading-circularを表示
    this.loading = !this.loading
    
    // loading-circularを非表示
    setTimeout(this.stopLoading,3000)
    return this.inputValue
  }
  
  stopLoading() {
    this.loading = false
  }
}