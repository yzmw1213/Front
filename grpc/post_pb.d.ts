import * as jspb from "google-protobuf"

export class Post extends jspb.Message {
  getId(): number;
  setId(value: number): Post;

  getTitle(): string;
  setTitle(value: string): Post;

  getContent(): string;
  setContent(value: string): Post;

  getCreateUserId(): number;
  setCreateUserId(value: number): Post;

  getCreateUserName(): string;
  setCreateUserName(value: string): Post;

  getUpdateUserId(): number;
  setUpdateUserId(value: number): Post;

  getUpdateUserName(): string;
  setUpdateUserName(value: string): Post;

  getTagsList(): Array<number>;
  setTagsList(value: Array<number>): Post;
  clearTagsList(): Post;
  addTags(value: number, index?: number): Post;

  getLikeUsersList(): Array<number>;
  setLikeUsersList(value: Array<number>): Post;
  clearLikeUsersList(): Post;
  addLikeUsers(value: number, index?: number): Post;

  getCommentsList(): Array<Comment>;
  setCommentsList(value: Array<Comment>): Post;
  clearCommentsList(): Post;
  addComments(value?: Comment, index?: number): Comment;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Post.AsObject;
  static toObject(includeInstance: boolean, msg: Post): Post.AsObject;
  static serializeBinaryToWriter(message: Post, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Post;
  static deserializeBinaryFromReader(message: Post, reader: jspb.BinaryReader): Post;
}

export namespace Post {
  export type AsObject = {
    id: number,
    title: string,
    content: string,
    createUserId: number,
    createUserName: string,
    updateUserId: number,
    updateUserName: string,
    tagsList: Array<number>,
    likeUsersList: Array<number>,
    commentsList: Array<Comment.AsObject>,
  }
}

export class Comment extends jspb.Message {
  getId(): number;
  setId(value: number): Comment;

  getPostId(): number;
  setPostId(value: number): Comment;

  getCreateUserId(): number;
  setCreateUserId(value: number): Comment;

  getCreateUserName(): string;
  setCreateUserName(value: string): Comment;

  getContent(): string;
  setContent(value: string): Comment;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Comment.AsObject;
  static toObject(includeInstance: boolean, msg: Comment): Comment.AsObject;
  static serializeBinaryToWriter(message: Comment, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Comment;
  static deserializeBinaryFromReader(message: Comment, reader: jspb.BinaryReader): Comment;
}

export namespace Comment {
  export type AsObject = {
    id: number,
    postId: number,
    createUserId: number,
    createUserName: string,
    content: string,
  }
}

export class ResponseStatus extends jspb.Message {
  getCode(): string;
  setCode(value: string): ResponseStatus;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResponseStatus.AsObject;
  static toObject(includeInstance: boolean, msg: ResponseStatus): ResponseStatus.AsObject;
  static serializeBinaryToWriter(message: ResponseStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResponseStatus;
  static deserializeBinaryFromReader(message: ResponseStatus, reader: jspb.BinaryReader): ResponseStatus;
}

export namespace ResponseStatus {
  export type AsObject = {
    code: string,
  }
}

export class CreatePostRequest extends jspb.Message {
  getPost(): Post | undefined;
  setPost(value?: Post): CreatePostRequest;
  hasPost(): boolean;
  clearPost(): CreatePostRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreatePostRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreatePostRequest): CreatePostRequest.AsObject;
  static serializeBinaryToWriter(message: CreatePostRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreatePostRequest;
  static deserializeBinaryFromReader(message: CreatePostRequest, reader: jspb.BinaryReader): CreatePostRequest;
}

export namespace CreatePostRequest {
  export type AsObject = {
    post?: Post.AsObject,
  }
}

export class CreatePostResponse extends jspb.Message {
  getStatus(): ResponseStatus | undefined;
  setStatus(value?: ResponseStatus): CreatePostResponse;
  hasStatus(): boolean;
  clearStatus(): CreatePostResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreatePostResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreatePostResponse): CreatePostResponse.AsObject;
  static serializeBinaryToWriter(message: CreatePostResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreatePostResponse;
  static deserializeBinaryFromReader(message: CreatePostResponse, reader: jspb.BinaryReader): CreatePostResponse;
}

export namespace CreatePostResponse {
  export type AsObject = {
    status?: ResponseStatus.AsObject,
  }
}

export class ReadPostRequest extends jspb.Message {
  getId(): number;
  setId(value: number): ReadPostRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReadPostRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ReadPostRequest): ReadPostRequest.AsObject;
  static serializeBinaryToWriter(message: ReadPostRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReadPostRequest;
  static deserializeBinaryFromReader(message: ReadPostRequest, reader: jspb.BinaryReader): ReadPostRequest;
}

export namespace ReadPostRequest {
  export type AsObject = {
    id: number,
  }
}

export class ReadPostResponse extends jspb.Message {
  getPost(): Post | undefined;
  setPost(value?: Post): ReadPostResponse;
  hasPost(): boolean;
  clearPost(): ReadPostResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReadPostResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ReadPostResponse): ReadPostResponse.AsObject;
  static serializeBinaryToWriter(message: ReadPostResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReadPostResponse;
  static deserializeBinaryFromReader(message: ReadPostResponse, reader: jspb.BinaryReader): ReadPostResponse;
}

export namespace ReadPostResponse {
  export type AsObject = {
    post?: Post.AsObject,
  }
}

export class UpdatePostRequest extends jspb.Message {
  getPost(): Post | undefined;
  setPost(value?: Post): UpdatePostRequest;
  hasPost(): boolean;
  clearPost(): UpdatePostRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdatePostRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdatePostRequest): UpdatePostRequest.AsObject;
  static serializeBinaryToWriter(message: UpdatePostRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdatePostRequest;
  static deserializeBinaryFromReader(message: UpdatePostRequest, reader: jspb.BinaryReader): UpdatePostRequest;
}

export namespace UpdatePostRequest {
  export type AsObject = {
    post?: Post.AsObject,
  }
}

export class UpdatePostResponse extends jspb.Message {
  getStatus(): ResponseStatus | undefined;
  setStatus(value?: ResponseStatus): UpdatePostResponse;
  hasStatus(): boolean;
  clearStatus(): UpdatePostResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdatePostResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdatePostResponse): UpdatePostResponse.AsObject;
  static serializeBinaryToWriter(message: UpdatePostResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdatePostResponse;
  static deserializeBinaryFromReader(message: UpdatePostResponse, reader: jspb.BinaryReader): UpdatePostResponse;
}

export namespace UpdatePostResponse {
  export type AsObject = {
    status?: ResponseStatus.AsObject,
  }
}

export class LikePostRequest extends jspb.Message {
  getId(): number;
  setId(value: number): LikePostRequest;

  getUserId(): number;
  setUserId(value: number): LikePostRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LikePostRequest.AsObject;
  static toObject(includeInstance: boolean, msg: LikePostRequest): LikePostRequest.AsObject;
  static serializeBinaryToWriter(message: LikePostRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LikePostRequest;
  static deserializeBinaryFromReader(message: LikePostRequest, reader: jspb.BinaryReader): LikePostRequest;
}

export namespace LikePostRequest {
  export type AsObject = {
    id: number,
    userId: number,
  }
}

export class LikePostResponse extends jspb.Message {
  getStatus(): ResponseStatus | undefined;
  setStatus(value?: ResponseStatus): LikePostResponse;
  hasStatus(): boolean;
  clearStatus(): LikePostResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LikePostResponse.AsObject;
  static toObject(includeInstance: boolean, msg: LikePostResponse): LikePostResponse.AsObject;
  static serializeBinaryToWriter(message: LikePostResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LikePostResponse;
  static deserializeBinaryFromReader(message: LikePostResponse, reader: jspb.BinaryReader): LikePostResponse;
}

export namespace LikePostResponse {
  export type AsObject = {
    status?: ResponseStatus.AsObject,
  }
}

export class NotLikePostRequest extends jspb.Message {
  getId(): number;
  setId(value: number): NotLikePostRequest;

  getUserId(): number;
  setUserId(value: number): NotLikePostRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NotLikePostRequest.AsObject;
  static toObject(includeInstance: boolean, msg: NotLikePostRequest): NotLikePostRequest.AsObject;
  static serializeBinaryToWriter(message: NotLikePostRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NotLikePostRequest;
  static deserializeBinaryFromReader(message: NotLikePostRequest, reader: jspb.BinaryReader): NotLikePostRequest;
}

export namespace NotLikePostRequest {
  export type AsObject = {
    id: number,
    userId: number,
  }
}

export class NotLikePostResponse extends jspb.Message {
  getStatus(): ResponseStatus | undefined;
  setStatus(value?: ResponseStatus): NotLikePostResponse;
  hasStatus(): boolean;
  clearStatus(): NotLikePostResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NotLikePostResponse.AsObject;
  static toObject(includeInstance: boolean, msg: NotLikePostResponse): NotLikePostResponse.AsObject;
  static serializeBinaryToWriter(message: NotLikePostResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NotLikePostResponse;
  static deserializeBinaryFromReader(message: NotLikePostResponse, reader: jspb.BinaryReader): NotLikePostResponse;
}

export namespace NotLikePostResponse {
  export type AsObject = {
    status?: ResponseStatus.AsObject,
  }
}

export class DeletePostRequest extends jspb.Message {
  getId(): number;
  setId(value: number): DeletePostRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeletePostRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeletePostRequest): DeletePostRequest.AsObject;
  static serializeBinaryToWriter(message: DeletePostRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeletePostRequest;
  static deserializeBinaryFromReader(message: DeletePostRequest, reader: jspb.BinaryReader): DeletePostRequest;
}

export namespace DeletePostRequest {
  export type AsObject = {
    id: number,
  }
}

export class DeletePostResponse extends jspb.Message {
  getStatus(): ResponseStatus | undefined;
  setStatus(value?: ResponseStatus): DeletePostResponse;
  hasStatus(): boolean;
  clearStatus(): DeletePostResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeletePostResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeletePostResponse): DeletePostResponse.AsObject;
  static serializeBinaryToWriter(message: DeletePostResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeletePostResponse;
  static deserializeBinaryFromReader(message: DeletePostResponse, reader: jspb.BinaryReader): DeletePostResponse;
}

export namespace DeletePostResponse {
  export type AsObject = {
    status?: ResponseStatus.AsObject,
  }
}

export class ListPostRequest extends jspb.Message {
  getCondition(): string;
  setCondition(value: string): ListPostRequest;

  getId(): number;
  setId(value: number): ListPostRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListPostRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListPostRequest): ListPostRequest.AsObject;
  static serializeBinaryToWriter(message: ListPostRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListPostRequest;
  static deserializeBinaryFromReader(message: ListPostRequest, reader: jspb.BinaryReader): ListPostRequest;
}

export namespace ListPostRequest {
  export type AsObject = {
    condition: string,
    id: number,
  }
}

export class ListPostResponse extends jspb.Message {
  getCount(): number;
  setCount(value: number): ListPostResponse;

  getPostList(): Array<Post>;
  setPostList(value: Array<Post>): ListPostResponse;
  clearPostList(): ListPostResponse;
  addPost(value?: Post, index?: number): Post;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListPostResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListPostResponse): ListPostResponse.AsObject;
  static serializeBinaryToWriter(message: ListPostResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListPostResponse;
  static deserializeBinaryFromReader(message: ListPostResponse, reader: jspb.BinaryReader): ListPostResponse;
}

export namespace ListPostResponse {
  export type AsObject = {
    count: number,
    postList: Array<Post.AsObject>,
  }
}

export class CreateCommentRequest extends jspb.Message {
  getComment(): Comment | undefined;
  setComment(value?: Comment): CreateCommentRequest;
  hasComment(): boolean;
  clearComment(): CreateCommentRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateCommentRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateCommentRequest): CreateCommentRequest.AsObject;
  static serializeBinaryToWriter(message: CreateCommentRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateCommentRequest;
  static deserializeBinaryFromReader(message: CreateCommentRequest, reader: jspb.BinaryReader): CreateCommentRequest;
}

export namespace CreateCommentRequest {
  export type AsObject = {
    comment?: Comment.AsObject,
  }
}

export class CreateCommentResponse extends jspb.Message {
  getStatus(): ResponseStatus | undefined;
  setStatus(value?: ResponseStatus): CreateCommentResponse;
  hasStatus(): boolean;
  clearStatus(): CreateCommentResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateCommentResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateCommentResponse): CreateCommentResponse.AsObject;
  static serializeBinaryToWriter(message: CreateCommentResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateCommentResponse;
  static deserializeBinaryFromReader(message: CreateCommentResponse, reader: jspb.BinaryReader): CreateCommentResponse;
}

export namespace CreateCommentResponse {
  export type AsObject = {
    status?: ResponseStatus.AsObject,
  }
}

export class UpdateCommentRequest extends jspb.Message {
  getComment(): Comment | undefined;
  setComment(value?: Comment): UpdateCommentRequest;
  hasComment(): boolean;
  clearComment(): UpdateCommentRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateCommentRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateCommentRequest): UpdateCommentRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateCommentRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateCommentRequest;
  static deserializeBinaryFromReader(message: UpdateCommentRequest, reader: jspb.BinaryReader): UpdateCommentRequest;
}

export namespace UpdateCommentRequest {
  export type AsObject = {
    comment?: Comment.AsObject,
  }
}

export class UpdateCommentResponse extends jspb.Message {
  getStatus(): ResponseStatus | undefined;
  setStatus(value?: ResponseStatus): UpdateCommentResponse;
  hasStatus(): boolean;
  clearStatus(): UpdateCommentResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateCommentResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateCommentResponse): UpdateCommentResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateCommentResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateCommentResponse;
  static deserializeBinaryFromReader(message: UpdateCommentResponse, reader: jspb.BinaryReader): UpdateCommentResponse;
}

export namespace UpdateCommentResponse {
  export type AsObject = {
    status?: ResponseStatus.AsObject,
  }
}

export class DeleteCommentRequest extends jspb.Message {
  getId(): number;
  setId(value: number): DeleteCommentRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteCommentRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteCommentRequest): DeleteCommentRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteCommentRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteCommentRequest;
  static deserializeBinaryFromReader(message: DeleteCommentRequest, reader: jspb.BinaryReader): DeleteCommentRequest;
}

export namespace DeleteCommentRequest {
  export type AsObject = {
    id: number,
  }
}

export class DeleteCommentResponse extends jspb.Message {
  getStatus(): ResponseStatus | undefined;
  setStatus(value?: ResponseStatus): DeleteCommentResponse;
  hasStatus(): boolean;
  clearStatus(): DeleteCommentResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteCommentResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteCommentResponse): DeleteCommentResponse.AsObject;
  static serializeBinaryToWriter(message: DeleteCommentResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteCommentResponse;
  static deserializeBinaryFromReader(message: DeleteCommentResponse, reader: jspb.BinaryReader): DeleteCommentResponse;
}

export namespace DeleteCommentResponse {
  export type AsObject = {
    status?: ResponseStatus.AsObject,
  }
}

