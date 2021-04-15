import { Comment } from "~/grpc/post_pb"
import { CommentItem } from "~/assets/ts/constructor/CommentItem"
import { usersModule } from "~/store/modules/users"

// tCommentItem Formで編集する物件投稿の型
export type tCommentItem = {
  commentID: number
  postID: number
  commentContent: string
  createUserID: number
  createUserName: string
  createdByLoginUser: boolean
}

const defaultCommentItem: tCommentItem = {
  commentID: 0,
  postID: 0,
  commentContent: "",
  createUserID: 0,
  createUserName: "",
  createdByLoginUser: false,
}

export class CommentService {
  makeComment(commentItem: tCommentItem): Comment {
    const comment = new Comment()
    comment.setId(commentItem.commentID)
    comment.setPostId(commentItem.postID)
    comment.setCreateUserId(commentItem.createUserID)
    comment.setCreateUserName(commentItem.createUserName)
    comment.setContent(commentItem.commentContent)
    return comment
  }

  makeDefaultComment(): tCommentItem {
    return defaultCommentItem
  }

  getComment(comment: Comment): tCommentItem {
    const returnComment = new CommentItem(
      comment.getId(),
      comment.getPostId(),
      comment.getCreateUserId(),
      comment.getCreateUserName(),
      comment.getContent(),
      comment.getCreateUserId() === usersModule.loginUserId,
    )
    return returnComment
  }
}
