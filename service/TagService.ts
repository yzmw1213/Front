// import { credentials } from "grpc"
import { Rstatus } from "~/plugins/const"
import { Tag } from "~/grpc/tag_pb"
import { TagItem } from "~/assets/ts/constructor/TagItem"
import { TagServiceClient } from "~/grpc/TagServiceClientPb"

let proxyServerUrl: string = ""
const url = process.env.NUXT_ENV_PROXY_SERVER_URL

if (typeof url === "string") {
  proxyServerUrl = url
}

// Client credentials
const tagServiceClient: TagServiceClient = new TagServiceClient(
  proxyServerUrl, {}, {}
)

// tTagItem Formで編集するタグの型
export type tTagItem = {
  tagID: number
  tagName: string
  status: number
  stutusText: string
  createUserID: number
  updateUserID: number
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

// TTagChoice タグ選択肢の型
export type TTagChoice = { text: string, key: Number }

const defaultTagItem: tTagItem = {
  tagID: 0,
  tagName: "",
  status: 0,
  stutusText: "",
  createUserID: 0, // ログインユーザーのIDをセットする
  updateUserID: 0
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
