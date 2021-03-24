import { Component, Vue } from "nuxt-property-decorator"
import { postModule } from "~/store/modules/post"
import { tagsModule } from "~/store/modules/tags"

@Component({})
export default class SearchDialog extends Vue {
  dialog: boolean = false
  tagText: string = ""
  tagKey: number = 0

  get validTags() {
    return tagsModule.validTags
  }

  mounted() {
    tagsModule.getValidTags()
  }

  clear() {
    this.tagText = ""
    this.tagKey = 0
  }

  changeTag() {
    for (const tag of this.validTags) {
      if (tag.text === this.tagText) {
        this.tagKey = tag.key
      }
    }
  }

  doSearch() {
    this.dialog = false
    tagsModule.SET_SEARCH_TAG(this.tagKey)

    if (this.tagKey === 0) {
      postModule.getAllPosts()
      return
    }

    // 選択されたタグで検索を行う
    postModule.getPostsByTagID(this.tagKey)
  }
}
