import { Component, Vue } from "nuxt-property-decorator"
import { postModule } from "~/store/modules/post"
import { tagsModule } from "~/store/modules/tags"

@Component({})
export default class SearchDialog extends Vue {
  dialog: boolean = false
  tag: number = 0

  get validTags() {
    return tagsModule.validTags
  }

  mounted() {
    tagsModule.getValidTags()
  }

  clear() {
    this.tag = 0
  }

  doSearch() {
    this.dialog = false
    if (this.tag === 0) {
      postModule.getAllPosts()
      return
    }
    postModule.getPostsByTagID(2)
  }
}
