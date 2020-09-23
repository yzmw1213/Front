import { Component, Vue, Emit } from "nuxt-property-decorator"

@Component({})
export default class Post extends Vue {
  // variables
  content: string = ""
  submittedArticle :{ title: string, description: string, image: string } ={
    title: "",
    description: "",
    image: "",
  }

  fileContent: unknown = null

  // methods
  post() {
    console.log("post")

    // imageはgRPCでサーバーに送り、サーバー側の処理ででS3に上げる。
    console.log(this.content)
    console.log(this.fileContent)
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
