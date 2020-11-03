import { Component, Vue, Emit } from "nuxt-property-decorator"
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
        this.$setStatusMessage(err.message)
      }
      const status: ResponseStatus | undefined = res.getStatus()
      const code = status!.getCode()
      // status.codeに応じたダイアログ表示
      this.$setStatusMessage(code)
      // deleteした後に一覧表示の更新処理を行う。
      this.initialize()
    })
  }

  getAllTag() {
    let i = 0
    const request = new ListTagRequest()
    tagServiceClient.listTag(request, {}, (err, res) => {
      if (err != null) {
        this.$setStatusMessage("UNKNOWN_ERROR")
      }
      while (i < res.getTagList().length) {
        this.tags.push(this.tService.getTag(res.getTagList()[i]))
        i++
      }
    })
  }

  @Emit("go-home")
  cancelPost() {
  }
}
