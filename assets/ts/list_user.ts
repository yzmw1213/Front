import { Component, Vue } from "nuxt-property-decorator"

import { UserService } from "~/service/UserService"

@Component({})
export default class ListCompany extends Vue {
  uService: UserService
  companies: any[] = []

  created() {
    this.initialize()
  }

  //  methods
  initialize() {
    this.uService = new UserService()
    this.companies = []
  }

  clickCard(id: number) {
    console.log("clicked: ", id)
  }
}
