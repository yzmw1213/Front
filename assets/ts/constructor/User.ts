class User {
  constructor(
    public userID: number,
    public userName: string,
    public profileContent: string,
    public kind: number,
    public kindText: string,
    public email: string,
    public isSuper: boolean
  ) {
    this.userID = userID
    this.userName = userName
    this.profileContent = profileContent
    this.kind = kind
    this.kindText = kindText
    this.email = email
    this.isSuper = isSuper
  }
}

export { User }
