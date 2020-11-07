class UserItem {
  constructor(
    public userID: number,
    public userName: string,
    public password: string,
    public profileText: string,
    public email: string,
    public gender: number,
    public authority: number
  ) {
    this.userID = userID
    this.userName = userName
    this.password = password
    this.profileText = profileText
    this.email = email
    this.gender = gender
    this.authority = authority
  }
}

class UserProfileItem {
  constructor(
    public userID: number,
    public userName: string,
    public profileText: string,
    public gender: number,
    public authority: number
  ) {
    this.userID = userID
    this.userName = userName
    this.profileText = profileText
    this.gender = gender
    this.authority = authority
  }
}

export { UserItem, UserProfileItem }
