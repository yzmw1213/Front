import { Action, Mutation, VuexModule, getModule, Module } from "vuex-module-decorators"
import store from "~/store/store"
import {
  ListValidTagRequest,
  ListValidTagResponse,
} from "~/grpc/tag_pb"

import { tTagItem, tagServiceClient, TTagChoice } from "~/service/TagService"

export interface TagsState {
  editTag: tTagItem
  validTags: TTagChoice[]
}

@Module({
  dynamic: true,
  store,
  name: "tag",
  namespaced: true
})

class Tags extends VuexModule implements TagsState {
  // state
  // editTag 編集中のタグの初期化
  editTag: tTagItem = {
    tagID: 0,
    tagName: "",
    status: 0,
    stutusText: "",
    createUserID: 0, // ログインユーザーのIDをセットする
    updateUserID: 0
  }

  searchTagID: number = 0

  validTags: TTagChoice[] = []

  // mutation
  @Mutation
  public SET_EDIT_TAG(eTag: tTagItem) {
    this.editTag = eTag
  }

  @Mutation
  public SET_SEARCH_TAG(id: number) {
    this.searchTagID = id
  }

  @Mutation
  public SET_VALID_TAGS(vTags: TTagChoice[]) {
    this.validTags = vTags
  }

  @Action({ commit: "SET_VALID_TAGS" })
  async getValidTags() {
    let i = 0
    const tags: TTagChoice[] = []
    const request = new ListValidTagRequest()
    await tagServiceClient.listValidTag(request, {}, (_, res: ListValidTagResponse) => {
      while (i < res.getTagList().length) {
        const tag = res.getTagList()[i]
        const tagChoice: TTagChoice = {
          text: tag.getTagName(),
          key: tag.getTagId()
        }
        tags.push(tagChoice)
        i++
      }
    })
    return tags
  }
}

export const tagsModule = getModule(Tags)
