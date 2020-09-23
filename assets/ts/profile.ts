import { Component, Vue } from "nuxt-property-decorator"

@Component({})
export default class Profile extends Vue {
  profiles: { name: string, value: string }[] = [
    {
      name: "Name",
      value: "Ben",
    },
    {
      name: "Age",
      value: "24",
    },
    {
      name: "Gender",
      value: "man",
    },
  ]
}
