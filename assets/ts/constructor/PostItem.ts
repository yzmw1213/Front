class PostItem {
  constructor(
    public postID: number,
    public status: number,
    // public stutusText: string,
    public title: string,
    public content: string,
    public maxNum: number,
    public gender: number,
    public tags: number[],
    public createUserID: number,
    public updateUserID: number,
  ) {
    this.postID = postID
    this.status = status
    // this.stutusText = stutusText
    this.title = title
    this.content = content
    this.maxNum = maxNum
    this.gender = gender
    this.tags = tags
    this.createUserID = createUserID
    this.updateUserID = updateUserID
  }
}

export { PostItem }
