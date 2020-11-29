class UserItem {
  constructor(
    public userID: number,
    public userName: string,
    public password: string,
    public profileText: string,
    public email: string,
    public authority: number
  ) {
    this.userID = userID
    this.userName = userName
    this.password = password
    this.profileText = profileText
    this.email = email
    this.authority = authority
  }
}

class UserProfileItem {
  constructor(
    public userID: number,
    public userName: string,
    public profileText: string,
    public authority: number
  ) {
    this.userID = userID
    this.userName = userName
    this.profileText = profileText
    this.authority = authority
  }
}

export { UserItem, UserProfileItem }
