import { Component, Vue, Emit, Watch } from "nuxt-property-decorator"
import { Rstatus } from "~/plugins/const"

import { CreateTagRequest, ListTagRequest, Tag } from "~/grpc/tag_pb"
import { tagServiceClient, TagService, tTagHeader, tTagItem } from "~/service/TagService"

@Component({})
export default class CreateTag extends Vue {
  tService: TagService
  // variables
  dialog: boolean = false
  headers: tTagHeader[] = [
    {
      text: "タグ名",
      sortable: true,
      value: "tagName",
    },
    {
      text: "状態",
      sortable: true,
      value: "stutusText",
    },
    {
      text: "編集",
      sortable: false,
      value: "actions",
    },
  ]

  tags: any[] = []
  editedIndex: number = -1
  editedItem: tTagItem = {
    tagID: 0,
    tagName: "",
    status: 0,
    stutusText: "",
    createUserID: "demoUser1",
    updateUserID: ""
  }

  defaultItem: tTagItem = {
    tagID: 0,
    tagName: "",
    status: 0,
    stutusText: "",
    createUserID: "demoUser1", // ログインユーザーのIDをセットする
    updateUserID: ""
  }

  rStatus: { key: Number, value: string}[] = [
    {
      key: 1,
      value: Rstatus[1]
    },
    {
      key: 2,
      value: Rstatus[2]
    }
  ]

  formTitle(): string {
    return this.editedIndex === -1 ? "New Item" : "Edit Item"
  }

  @Watch("dialog")
  onDialogChanged(dialog: boolean) {
    dialog || this.close()
  }

  created() {
    this.initialize()
  }

  //  methods
  initialize() {
    this.tService = new TagService()
    this.getAllTag()
    let i = 0
    while (i < this.tags.length) {
      this.tags[i].stutusText = Rstatus[this.tags[i].status]
      i++
    }
  }

  editItem(item: any) {
    this.editedIndex = this.tags.indexOf(item)
    this.editedItem = Object.assign({}, item)
    this.dialog = true
  }

  deleteItem(item: any) {
    const index = this.tags.indexOf(item)
    console.log(this.tags[index].tagName)
    confirm("タグ 「" + this.tags[index].tagName + "」 を削除します。よろしいですか ? ") && this.tags.splice(index, 1)
  }

  close() {
    this.dialog = false
    this.$nextTick(() => {
      this.editedItem = Object.assign({}, this.defaultItem)
      this.editedIndex = -1
    })
  }

  save() {
    this.editedItem.stutusText = Rstatus[this.editedItem.status]
    if (this.editedIndex > -1) {
      Object.assign(this.tags[this.editedIndex], this.editedItem)
    } else {
      this.tags.push(this.editedItem)
    }
    this.close()
  }

  getAllTag() {
    let i = 0
    const request = new ListTagRequest()
    let call = tagServiceClient.listTag(request, {}, (err, res) => {
      if (err != null) {
        console.log(err.code)
        console.log(err.message)
      }
      console.log(res.getTagList())
      while (i < res.getTagList().length) {
        this.tags.push(this.tService.getTag(res.getTagList()[i]))
        i++
      }
    })
  }

  post() {
    const request = new CreateTagRequest()
    let i = 0
    while (i < this.tags.length) {
      const postTag = this.tags[i]
      const tag = this.tService.makeTag(postTag)
      request.setTag(tag)
      tagServiceClient.createTag(request, {}, (err, res) => {
        if (err != null) {
          console.log(err)
        }
        console.log(res)
      })
      i++
    }
  }

  @Emit("go-home")
  cancelPost() {
  }
}
