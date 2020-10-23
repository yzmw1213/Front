class TagItem {
  constructor(
    public tagID: number,
    public tagName: string,
    public status: number,
    public stutusText: string,
    public createUserID: string,
    public updateUserID: string
  ) {
    this.tagID = tagID
    this.tagName = tagName
    this.status = status
    this.stutusText = stutusText
    this.createUserID = createUserID
    this.updateUserID = updateUserID
  }
}

export { TagItem }
