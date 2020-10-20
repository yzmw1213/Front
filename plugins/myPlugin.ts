import { Vue } from "nuxt-property-decorator"
import { messengerModule } from "@/store/modules/message"

declare module "vue/types/vue" {
  interface Vue {
    $setStatusMessage(code: string): void
  }
}

// 画面上部にテロップを出す
Vue.prototype.$setStatusMessage = (code: string) => {
  let message: string = ""
  let messageStatus: string = ""
  switch (code) {
    // 重複登録エラー
    case "TAG_NAME_ALREADY_USED_ERROR":
      message = "同じ名前のタグが既に登録済のため、登録できません"
      messageStatus = "ERROR"
      break
    case "TAG_CREATE_SUCCESS":
      message = "タグの作成に成功しました"
      messageStatus = "SUCCESS"
      break
    case "TAG_UPDATE_SUCCESS":
      message = "タグの更新に成功しました"
      messageStatus = "SUCCESS"
      break
    case "TAG_NAME_COUNT_ERROR":
      message = "タグ名は1文字以上12文字以下で入力してください"
      messageStatus = "ERROR"
      break
    case "TAG_DELETE_SUCCESS":
      message = "タグの削除に成功しました"
      messageStatus = "SUCCESS"
      break
    case "TAG_NOT_EXISTS_ERROR":
      message = "指定されたタグは既に削除済みか、登録されていないため削除できません"
      messageStatus = "ERROR"
      break
    default:
      break
  }
  messengerModule.SET_MESSAGE(message, messageStatus)
}