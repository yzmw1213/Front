import { Component, Vue, Emit } from "nuxt-property-decorator"
import { Error } from "grpc-web"
import { Rstatus } from "~/plugins/const"
import { tagsModule } from "@/store/modules/tags"
import { usersModule } from "@/store/modules/users"

import {
  CreateTagRequest,
  CreateTagResponse,
  ResponseStatus,
  Tag,
  UpdateTagRequest,
  UpdateTagResponse
} from "~/grpc/tag_pb"

import { tagServiceClient, TagService, tTagItem } from "~/service/TagService"

@Component({})
export default class CreateTag extends Vue {
  tService: TagService
  editedItem: tTagItem = {
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

  post() {
    const id: number = this.editedItem.tagID
    const tag = this.tService.makeTag(this.editedItem)
    if (id === 0) {
      this.create(tag)
    }
    if (id > 0) {
      this.update(tag)
    }
  }

  created() {
    this.tService = new TagService()
    this.editedItem = tagsModule.editTag
  }

  create(tag: Tag) {
    const request = new CreateTagRequest()
    request.setTag(tag)
    tagServiceClient.createTag(request, {}, (err, res: CreateTagResponse) => {
      this.handleCreateUpdateResponse(res, err)
    })
  }

  update(tag: Tag) {
    const request = new UpdateTagRequest()
    request.setTag(tag)
    tagServiceClient.updateTag(request, {}, (err, res: UpdateTagResponse) => {
      this.handleCreateUpdateResponse(res, err)
    })
  }

  handleCreateUpdateResponse(res: CreateTagResponse | UpdateTagResponse, err: Error) {
    if (err != null) {
      // status.codeに応じたダイアログ表示
      this.showDialog(err.message)
    } else {
      console.log(res)
      const status: ResponseStatus | undefined = res.getStatus()
      const code = status!.getCode()
      // status.codeに応じたダイアログ表示
      this.showDialog(code)
    }
  }

  showDialog(code: string) {
    this.$setStatusMessage(code)
  }

  @Emit("go-home")
  cancelPost() {
    const defaultTag = this.tService.makeDefaultTag()
    tagsModule.SET_EDIT_TAG(defaultTag)
  }

  @Emit("go-tag-list")
  goList() {
  }
}
