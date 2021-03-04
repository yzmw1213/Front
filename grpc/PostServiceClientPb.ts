/**
 * @fileoverview gRPC-Web generated client stub for postservice
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import {
  CreateCommentRequest,
  CreateCommentResponse,
  CreatePostRequest,
  CreatePostResponse,
  DeleteCommentRequest,
  DeleteCommentResponse,
  DeletePostRequest,
  DeletePostResponse,
  LikePostRequest,
  LikePostResponse,
  ListPostRequest,
  ListPostResponse,
  NotLikePostRequest,
  NotLikePostResponse,
  ReadPostRequest,
  ReadPostResponse,
  UpdateCommentRequest,
  UpdateCommentResponse,
  UpdatePostRequest,
  UpdatePostResponse} from './post_pb';

export class PostServiceClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: string; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: string; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodInfoCreatePost = new grpcWeb.AbstractClientBase.MethodInfo(
    CreatePostResponse,
    (request: CreatePostRequest) => {
      return request.serializeBinary();
    },
    CreatePostResponse.deserializeBinary
  );

  createPost(
    request: CreatePostRequest,
    metadata: grpcWeb.Metadata | null): Promise<CreatePostResponse>;

  createPost(
    request: CreatePostRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: CreatePostResponse) => void): grpcWeb.ClientReadableStream<CreatePostResponse>;

  createPost(
    request: CreatePostRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: CreatePostResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/postservice.PostService/CreatePost',
        request,
        metadata || {},
        this.methodInfoCreatePost,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/postservice.PostService/CreatePost',
    request,
    metadata || {},
    this.methodInfoCreatePost);
  }

  methodInfoReadPost = new grpcWeb.AbstractClientBase.MethodInfo(
    ReadPostResponse,
    (request: ReadPostRequest) => {
      return request.serializeBinary();
    },
    ReadPostResponse.deserializeBinary
  );

  readPost(
    request: ReadPostRequest,
    metadata: grpcWeb.Metadata | null): Promise<ReadPostResponse>;

  readPost(
    request: ReadPostRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ReadPostResponse) => void): grpcWeb.ClientReadableStream<ReadPostResponse>;

  readPost(
    request: ReadPostRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: ReadPostResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/postservice.PostService/ReadPost',
        request,
        metadata || {},
        this.methodInfoReadPost,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/postservice.PostService/ReadPost',
    request,
    metadata || {},
    this.methodInfoReadPost);
  }

  methodInfoUpdatePost = new grpcWeb.AbstractClientBase.MethodInfo(
    UpdatePostResponse,
    (request: UpdatePostRequest) => {
      return request.serializeBinary();
    },
    UpdatePostResponse.deserializeBinary
  );

  updatePost(
    request: UpdatePostRequest,
    metadata: grpcWeb.Metadata | null): Promise<UpdatePostResponse>;

  updatePost(
    request: UpdatePostRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: UpdatePostResponse) => void): grpcWeb.ClientReadableStream<UpdatePostResponse>;

  updatePost(
    request: UpdatePostRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: UpdatePostResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/postservice.PostService/UpdatePost',
        request,
        metadata || {},
        this.methodInfoUpdatePost,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/postservice.PostService/UpdatePost',
    request,
    metadata || {},
    this.methodInfoUpdatePost);
  }

  methodInfoLikePost = new grpcWeb.AbstractClientBase.MethodInfo(
    LikePostResponse,
    (request: LikePostRequest) => {
      return request.serializeBinary();
    },
    LikePostResponse.deserializeBinary
  );

  likePost(
    request: LikePostRequest,
    metadata: grpcWeb.Metadata | null): Promise<LikePostResponse>;

  likePost(
    request: LikePostRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: LikePostResponse) => void): grpcWeb.ClientReadableStream<LikePostResponse>;

  likePost(
    request: LikePostRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: LikePostResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/postservice.PostService/LikePost',
        request,
        metadata || {},
        this.methodInfoLikePost,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/postservice.PostService/LikePost',
    request,
    metadata || {},
    this.methodInfoLikePost);
  }

  methodInfoNotLikePost = new grpcWeb.AbstractClientBase.MethodInfo(
    NotLikePostResponse,
    (request: NotLikePostRequest) => {
      return request.serializeBinary();
    },
    NotLikePostResponse.deserializeBinary
  );

  notLikePost(
    request: NotLikePostRequest,
    metadata: grpcWeb.Metadata | null): Promise<NotLikePostResponse>;

  notLikePost(
    request: NotLikePostRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: NotLikePostResponse) => void): grpcWeb.ClientReadableStream<NotLikePostResponse>;

  notLikePost(
    request: NotLikePostRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: NotLikePostResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/postservice.PostService/NotLikePost',
        request,
        metadata || {},
        this.methodInfoNotLikePost,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/postservice.PostService/NotLikePost',
    request,
    metadata || {},
    this.methodInfoNotLikePost);
  }

  methodInfoDeletePost = new grpcWeb.AbstractClientBase.MethodInfo(
    DeletePostResponse,
    (request: DeletePostRequest) => {
      return request.serializeBinary();
    },
    DeletePostResponse.deserializeBinary
  );

  deletePost(
    request: DeletePostRequest,
    metadata: grpcWeb.Metadata | null): Promise<DeletePostResponse>;

  deletePost(
    request: DeletePostRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: DeletePostResponse) => void): grpcWeb.ClientReadableStream<DeletePostResponse>;

  deletePost(
    request: DeletePostRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: DeletePostResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/postservice.PostService/DeletePost',
        request,
        metadata || {},
        this.methodInfoDeletePost,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/postservice.PostService/DeletePost',
    request,
    metadata || {},
    this.methodInfoDeletePost);
  }

  methodInfoListPost = new grpcWeb.AbstractClientBase.MethodInfo(
    ListPostResponse,
    (request: ListPostRequest) => {
      return request.serializeBinary();
    },
    ListPostResponse.deserializeBinary
  );

  listPost(
    request: ListPostRequest,
    metadata: grpcWeb.Metadata | null): Promise<ListPostResponse>;

  listPost(
    request: ListPostRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ListPostResponse) => void): grpcWeb.ClientReadableStream<ListPostResponse>;

  listPost(
    request: ListPostRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: ListPostResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/postservice.PostService/ListPost',
        request,
        metadata || {},
        this.methodInfoListPost,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/postservice.PostService/ListPost',
    request,
    metadata || {},
    this.methodInfoListPost);
  }

  methodInfoCreateComment = new grpcWeb.AbstractClientBase.MethodInfo(
    CreateCommentResponse,
    (request: CreateCommentRequest) => {
      return request.serializeBinary();
    },
    CreateCommentResponse.deserializeBinary
  );

  createComment(
    request: CreateCommentRequest,
    metadata: grpcWeb.Metadata | null): Promise<CreateCommentResponse>;

  createComment(
    request: CreateCommentRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: CreateCommentResponse) => void): grpcWeb.ClientReadableStream<CreateCommentResponse>;

  createComment(
    request: CreateCommentRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: CreateCommentResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/postservice.PostService/CreateComment',
        request,
        metadata || {},
        this.methodInfoCreateComment,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/postservice.PostService/CreateComment',
    request,
    metadata || {},
    this.methodInfoCreateComment);
  }

  methodInfoUpdateComment = new grpcWeb.AbstractClientBase.MethodInfo(
    UpdateCommentResponse,
    (request: UpdateCommentRequest) => {
      return request.serializeBinary();
    },
    UpdateCommentResponse.deserializeBinary
  );

  updateComment(
    request: UpdateCommentRequest,
    metadata: grpcWeb.Metadata | null): Promise<UpdateCommentResponse>;

  updateComment(
    request: UpdateCommentRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: UpdateCommentResponse) => void): grpcWeb.ClientReadableStream<UpdateCommentResponse>;

  updateComment(
    request: UpdateCommentRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: UpdateCommentResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/postservice.PostService/UpdateComment',
        request,
        metadata || {},
        this.methodInfoUpdateComment,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/postservice.PostService/UpdateComment',
    request,
    metadata || {},
    this.methodInfoUpdateComment);
  }

  methodInfoDeleteComment = new grpcWeb.AbstractClientBase.MethodInfo(
    DeleteCommentResponse,
    (request: DeleteCommentRequest) => {
      return request.serializeBinary();
    },
    DeleteCommentResponse.deserializeBinary
  );

  deleteComment(
    request: DeleteCommentRequest,
    metadata: grpcWeb.Metadata | null): Promise<DeleteCommentResponse>;

  deleteComment(
    request: DeleteCommentRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: DeleteCommentResponse) => void): grpcWeb.ClientReadableStream<DeleteCommentResponse>;

  deleteComment(
    request: DeleteCommentRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: DeleteCommentResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/postservice.PostService/DeleteComment',
        request,
        metadata || {},
        this.methodInfoDeleteComment,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/postservice.PostService/DeleteComment',
    request,
    metadata || {},
    this.methodInfoDeleteComment);
  }

}

