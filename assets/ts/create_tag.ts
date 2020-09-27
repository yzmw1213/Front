import { Component, Vue, Emit, Watch } from "nuxt-property-decorator"

@Component({})
export default class CreateTag extends Vue {
  // variables
  dialog: boolean = false
  headers: { text: string, sortable: boolean, value: string }[] = [
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
  editedItem: { tagID: number, tagName: string, status: number, stutusText: string } = {
    tagID: 0,
    tagName: "",
    status: 0,
    stutusText: ""
  }

  defaultItem: { tagID: number, tagName: string, status: number, stutusText: string } = {
    tagID: 0,
    tagName: "",
    status: 0,
    stutusText: ""
  }

  Rstatus: { [status: number ]: string} = {
    1: "公開",
    2: "非公開"
  }

  rStatus: { key: Number, value: string}[] = [
    {
      key: 1,
      value: this.Rstatus[1]
    },
    {
      key: 2,
      value: this.Rstatus[2]
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
    this.tags = [
      {
        id: 1,
        tagName: "駅から近い",
        status: 1,
        stutusText: ""
      }
    ]
    let i = 0
    while (i < this.tags.length) {
      this.tags[i].stutusText = this.Rstatus[this.tags[i].status]
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
    this.editedItem.stutusText = this.Rstatus[this.editedItem.status]
    if (this.editedIndex > -1) {
      Object.assign(this.tags[this.editedIndex], this.editedItem)
    } else {
      this.tags.push(this.editedItem)
    }
    this.close()
  }

  post() {
    console.log(this.tags)
  }

  @Emit("go-home")
  cancelPost() {
  }
}
