import { tCommentItem } from "~/service/CommentService"

class PostItem {
  constructor(
    public postID: number,
    public status: number,
    // public stutusText: string,
    public title: string,
    public content: string,
    public tags: number[],
    public image: string,
    public createUserID: number,
    public createUserName: string,
    public updateUserID: number,
    public updateUserName: string,
    public likeUsers: number[],
    public likeUsersNum: number,
    public likedByLoginUser: boolean,
    public comments: tCommentItem[],
  ) {
    this.postID = postID
    this.status = status
    // this.stutusText = stutusText
    this.title = title
    this.content = content
    this.image = image
    this.tags = tags
    this.createUserID = createUserID
    this.createUserName = createUserName
    this.updateUserID = updateUserID
    this.updateUserName = updateUserName
    this.likeUsers = likeUsers
    this.likeUsersNum = likeUsersNum
    this.likedByLoginUser = likedByLoginUser
    this.comments = comments
  }
}

export { PostItem }
