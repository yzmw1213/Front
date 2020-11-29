class PostItem {
  constructor(
    public postID: number,
    public status: number,
    // public stutusText: string,
    public title: string,
    public content: string,
    public tags: number[],
    public createUserID: number,
    public createUserName: string,
    public updateUserID: number,
    public updateUserName: string,
  ) {
    this.postID = postID
    this.status = status
    // this.stutusText = stutusText
    this.title = title
    this.content = content
    this.tags = tags
    this.createUserID = createUserID
    this.createUserName = createUserName
    this.updateUserID = updateUserID
    this.updateUserName = updateUserName
  }
}

export { PostItem }
