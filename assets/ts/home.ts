import { Component, Vue } from "nuxt-property-decorator"

import Logo from "~/components/Logo.vue"
import VuetifyLogo from "~/components/VuetifyLogo.vue"

@Component({
  components: {
    Logo,
    VuetifyLogo,
  }
})
  
export default class Home extends Vue {
}