import { Component, Vue, Emit, Watch } from "nuxt-property-decorator"
import { Rstatus } from "~/plugins/const"
import { tagsModule } from "@/store/modules/tags"

import {
  DeleteTagRequest,
  DeleteTagResponse,
  ListTagRequest,
  ResponseStatus,
} from "~/grpc/tag_pb"

import { tagServiceClient, TagService, tTagHeader, tTagItem } from "~/service/TagService"
import { usersModule } from "~/store/modules/users"

@Component({})
export default class ListTag extends Vue {
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
    createUserID: 0,
    updateUserID: 0
  }

  defaultItem: tTagItem = {
    tagID: 0,
    tagName: "",
    status: 0,
    stutusText: "",
    createUserID: usersModule.loginUserId,
    updateUserID: 0
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
  // responseStatus: ResponseStatus

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
    this.tags = []
    this.getAllTag()
    let i = 0
    while (i < this.tags.length) {
      this.tags[i].stutusText = Rstatus[this.tags[i].status]
      i++
    }
  }

  @Emit("edit-tag")
  editItem(item: any) {
    this.editedIndex = this.tags.indexOf(item)
    this.editedItem = Object.assign({}, item)
    tagsModule.SET_EDIT_TAG(this.editedItem)
  }

  @Emit("edit-tag")
  createTag() {
    tagsModule.SET_EDIT_TAG(this.defaultItem)
  }

  deleteItem(item: any) {
    const index = this.tags.indexOf(item)
    const id = this.tags[index].tagID
    confirm("タグ 「" + this.tags[index].tagName + "」 を削除します。よろしいですか ? ") && this.delete(index, id)
  }

  delete(index: number, id: number) {
    const request = new DeleteTagRequest()
    request.setTagId(id)
    tagServiceClient.deleteTag(request, {}, (err, res: DeleteTagResponse) => {
      if (err != null) {
        this.showDialog(err.message)
      }
      const status: ResponseStatus | undefined = res.getStatus()
      const code = status!.getCode()
      // status.codeに応じたダイアログ表示
      this.showDialog(code)
      // deleteした後に一覧表示の更新処理を行う。
      this.initialize()
    })
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
    tagServiceClient.listTag(request, {}, (err, res) => {
      if (err != null) {
        this.showDialog("エラーが発生しました。もう1度お試しください")
      }
      while (i < res.getTagList().length) {
        this.tags.push(this.tService.getTag(res.getTagList()[i]))
        i++
      }
    })
  }

  showDialog(code: string) {
    this.$setStatusMessage(code)
  }

  @Emit("go-home")
  cancelPost() {
  }
}
