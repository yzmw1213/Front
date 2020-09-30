import { Component, Vue, Emit } from "nuxt-property-decorator"
import { genderChoices, numChoices, tagChoices } from "~/plugins/const"

@Component({})
export default class CreatePost extends Vue {
  // variables
  submittedArticle :{ title: string, description: string, image: string } ={
    title: "",
    description: "",
    image: "",
  }

  numChoices: Number[] = numChoices
  genderChoices: { text: string, key: Number }[] = genderChoices
  tagChoices: { text: string, key: Number }[] = tagChoices

  postContent: { title: string, companyID: string, content: string, maxNum: Number, gender: Number, tags: Number[]} = {
    title: "",
    companyID: "", // ログイン情報から自動的に取得する
    content: "",
    maxNum: 0,
    gender: 0,
    tags: [],
  }

  // methods
  post() {
    console.log("post")

    // imageはgRPCでサーバーに送り、サーバー側の処理ででS3に上げる。
    console.log(this.postContent.content)
    console.log(this.submittedArticle.image)
    console.log(this.submittedArticle.title)

    // ファイルの更新日時を取得し、古い場合はワーニングを出すなど
  }

  @Emit("go-home")
  cancelPost() {
  }

  onImageUploaded(e: Event) {
    e.preventDefault()
    if (e.target instanceof HTMLInputElement) {
      // ファイルを取得できない場合は処理を終了する.
      // Object is possibly null を以下で対処できるかどうか.
      if (e.target.files.length === 0) {
        return
      }
      const image = e.target.files[0]
      this.submittedArticle.title = image.name
      this.createImage(image)
    }
  }

  createImage(image: Blob) {
    const reader = new FileReader()
    // imageをreaderにDataURLとしてattachする
    reader.readAsDataURL(image)
    // readAdDataURLが完了したあと実行される処理
    reader.onload = () => {
      this.submittedArticle.image = reader.result as string
    }
  }
}
