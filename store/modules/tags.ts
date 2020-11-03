import { Mutation, VuexModule, getModule, Module } from "vuex-module-decorators"
import store from "~/store/store"

import { tTagItem } from "~/service/TagService"

export interface TagsState {
  editTag: tTagItem
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

  // mutation
  @Mutation
  public SET_EDIT_TAG(eTag: tTagItem) {
    this.editTag = eTag
  }
}

export const tagsModule = getModule(Tags)
