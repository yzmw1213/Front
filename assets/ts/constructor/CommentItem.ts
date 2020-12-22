class CommentItem {
  constructor(
    public commentID: number,
    public postID: number,
    public createUserID: number,
    public createUserName: string,
    public commentContent: string,
  ) {
    this.commentID = commentID
    this.postID = postID
    this.createUserID = createUserID
    this.createUserName = createUserName
    this.commentContent = commentContent
  }
}

export { CommentItem }
