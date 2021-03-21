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
    // 認証
    case "LOGIN_SUCCESS":
      message = "ログインしました"
      messageStatus = "SUCCESS"
      break
    case "LOGIN_FAIL":
      message = "ログインに失敗しました。メールアドレスとパスワードを確認してください"
      messageStatus = "ERROR"
      break
    case "LOGOUT_SUCCESS":
      message = "ログアウトしました"
      messageStatus = "SUCCESS"
      break
    // タグサービス
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
    case "COMMENT_CREATE_SUCCESS":
      message = "コメントを作成しました"
      messageStatus = "SUCCESS"
      break
    case "COMMENT_UPDATE_SUCCESS":
      message = "コメントを更新しました"
      messageStatus = "SUCCESS"
      break
    case "COMMENT_DELETE_SUCCESS":
      message = "コメントを削除しました"
      messageStatus = "SUCCESS"
      break
    // 投稿サービス
    case "POST_CREATE_SUCCESS":
      message = "投稿の登録に成功しました"
      messageStatus = "SUCCESS"
      break
    case "POST_UPDATE_SUCCESS":
      message = "投稿の更新に成功しました"
      messageStatus = "SUCCESS"
      break
    case "POST_DELETE_SUCCESS":
      message = "投稿の削除に成功しました"
      messageStatus = "SUCCESS"
      break
    case "POST_NOT_EXISTS_ERROR":
      message = "指定された投稿は既に削除済みか、登録されていないため削除できません"
      messageStatus = "ERROR"
      break
    case "POST_TITLE_COUNT_ERROR":
      message = "件名は1文字以上32文字以下で入力してください"
      messageStatus = "ERROR"
      break
    case "POST_CONTENT_COUNT_ERROR":
      message = "タグ名は1文字以上240文字以下で入力してください"
      messageStatus = "ERROR"
      break
    // ユーザーサービス
    case "EMAIL_ALREADY_USED_ERROR":
      message = "指定されたEメールアドレスは既に使われているため使用できません"
      messageStatus = "ERROR"
      break
    case "PASSWORD_NOT_SAME_ERROR":
      message = "確認用パスワードが一致しません。"
      messageStatus = "ERROR"
      break
    case "USER_CREATE_SUCCESS":
      message = "アカウントの作成に成功しました。ログイン画面より、ログインしてください。"
      messageStatus = "SUCCESS"
      break
    case "USER_UPDATE_SUCCESS":
      message = "アカウントの更新に成功しました。"
      messageStatus = "SUCCESS"
      break
    case "USER_DELETE_SUCCESS":
      message = "アカウントの削除に成功しました。"
      messageStatus = "SUCCESS"
      break
    case "UNKNOWN_ERROR":
      message = "エラーが発生しました。もう1度お試しください。"
      messageStatus = "ERROR"
      break
    default:
      break
  }
  messengerModule.SET_MESSAGE(message, messageStatus)
}
