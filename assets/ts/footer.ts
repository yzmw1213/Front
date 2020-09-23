import { Component, Vue } from "nuxt-property-decorator"

@Component({})
export default class Footer extends Vue {
  fixed: boolean = false;
  right: boolean = true;
  rightDrawer: boolean = false;
  drawer: boolean = false;
}
