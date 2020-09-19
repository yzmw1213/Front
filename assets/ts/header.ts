import { Component, Vue, Prop, Emit } from "nuxt-property-decorator"

import SearchForm from "~/components/ui/SearchForm.vue"
@Component({
  components: {
    SearchForm,
  }

})
  
export default class Header extends Vue {
  searchValue: string = ""
  items: { title: string}[] = [
    { title: 'Click Me' },
    { title: 'Click Me' },
    { title: 'Click Me' },
    { title: 'Click Me 2' },
  ];

  @Emit('open-nav')
  openNav() {
  }
  
  @Emit('do-search')
  searchEvent(value: any) {
    return value
  }
}