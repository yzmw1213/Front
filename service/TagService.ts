// import { credentials } from "grpc"
import { Rstatus } from "~/plugins/const"
import { Tag } from "~/grpc/tag_pb"
import { TagItem } from "~/assets/ts/constructor/TagItem"
import { TagServiceClient } from "~/grpc/TagServiceClientPb"

let proxy_server_url: string = ""
const url = process.env.NUXT_ENV_PROXY_SERVER_URL

if (typeof url === "string") {
  proxy_server_url = url
}

// Client credentials
const tagServiceClient: TagServiceClient = new TagServiceClient(
  proxy_server_url, {}, {}
)

// tTagItem Formで編集するタグの型
export type tTagItem = {
  tagID: number
  tagName: string
  status: number
  stutusText: string
  createUserID: string
  updateUserID: string
}

// tTagHeader Formで表示するタグデータテーブルの型
export type tTagHeader = {
  text: string
  sortable: boolean
  value: string
}

// TRstatus タグ公開ステータスの型
export type TRstatus = {
  [status: number]: string
}

const defaultTagItem: tTagItem = {
  tagID: 0,
  tagName: "",
  status: 0,
  stutusText: "",
  createUserID: "demoUser1", // ログインユーザーのIDをセットする
  updateUserID: ""
}

export class TagService {
  makeTag(postTag: tTagItem): Tag {
    const tag = new Tag()
    tag.setTagId(postTag.tagID)
    tag.setTagName(postTag.tagName)
    tag.setStatus(postTag.status)
    tag.setCreateuserId(postTag.createUserID)
    tag.setUpdateuserId(postTag.updateUserID)
    return tag
  }

  makeDefaultTag(): tTagItem {
    return defaultTagItem
  }

  getTag(tag: Tag): tTagItem {
    return new TagItem(
      tag.getTagId(),
      tag.getTagName(),
      tag.getStatus(),
      Rstatus[tag.getStatus()],
      tag.getCreateuserId(),
      tag.getUpdateuserId()
    )
  }
}

export default TagService

export { tagServiceClient }
