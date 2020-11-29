import { Component, Vue } from "nuxt-property-decorator"

import {
  ListCompanyRequest,
  ListCompanyResponse,
} from "~/grpc/user_pb"

import { userServiceClient, UserService } from "~/service/UserService"

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
    this.getAllCompany()
  }

  getAllCompany() {
    let i = 0
    const request = new ListCompanyRequest()
    userServiceClient.listCompany(request, {}, (err, res: ListCompanyResponse) => {
      console.log("res", res)
      if (err != null) {
        this.$setStatusMessage("UNKNOWN_ERROR")
      }
      while (i < res.getProfileList().length) {
        this.companies.push(this.uService.getUserProfile(res.getProfileList()[i]))
        i++
      }
    })
  }

  clickCard(id: number) {
    console.log("clicked: ", id)
  }
}
