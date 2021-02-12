/**
 * @fileoverview gRPC-Web generated client stub for tagservice
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import {
  CreateTagRequest,
  CreateTagResponse,
  DeleteTagRequest,
  DeleteTagResponse,
  ListTagRequest,
  ListTagResponse,
  ListValidTagRequest,
  ListValidTagResponse,
  UpdateTagRequest,
  UpdateTagResponse} from './tag_pb';

export class TagServiceClient {
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

  methodInfoCreateTag = new grpcWeb.AbstractClientBase.MethodInfo(
    CreateTagResponse,
    (request: CreateTagRequest) => {
      return request.serializeBinary();
    },
    CreateTagResponse.deserializeBinary
  );

  createTag(
    request: CreateTagRequest,
    metadata: grpcWeb.Metadata | null): Promise<CreateTagResponse>;

  createTag(
    request: CreateTagRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: CreateTagResponse) => void): grpcWeb.ClientReadableStream<CreateTagResponse>;

  createTag(
    request: CreateTagRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: CreateTagResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/tagservice.TagService/CreateTag',
        request,
        metadata || {},
        this.methodInfoCreateTag,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/tagservice.TagService/CreateTag',
    request,
    metadata || {},
    this.methodInfoCreateTag);
  }

  methodInfoDeleteTag = new grpcWeb.AbstractClientBase.MethodInfo(
    DeleteTagResponse,
    (request: DeleteTagRequest) => {
      return request.serializeBinary();
    },
    DeleteTagResponse.deserializeBinary
  );

  deleteTag(
    request: DeleteTagRequest,
    metadata: grpcWeb.Metadata | null): Promise<DeleteTagResponse>;

  deleteTag(
    request: DeleteTagRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: DeleteTagResponse) => void): grpcWeb.ClientReadableStream<DeleteTagResponse>;

  deleteTag(
    request: DeleteTagRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: DeleteTagResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/tagservice.TagService/DeleteTag',
        request,
        metadata || {},
        this.methodInfoDeleteTag,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/tagservice.TagService/DeleteTag',
    request,
    metadata || {},
    this.methodInfoDeleteTag);
  }

  methodInfoUpdateTag = new grpcWeb.AbstractClientBase.MethodInfo(
    UpdateTagResponse,
    (request: UpdateTagRequest) => {
      return request.serializeBinary();
    },
    UpdateTagResponse.deserializeBinary
  );

  updateTag(
    request: UpdateTagRequest,
    metadata: grpcWeb.Metadata | null): Promise<UpdateTagResponse>;

  updateTag(
    request: UpdateTagRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: UpdateTagResponse) => void): grpcWeb.ClientReadableStream<UpdateTagResponse>;

  updateTag(
    request: UpdateTagRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: UpdateTagResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/tagservice.TagService/UpdateTag',
        request,
        metadata || {},
        this.methodInfoUpdateTag,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/tagservice.TagService/UpdateTag',
    request,
    metadata || {},
    this.methodInfoUpdateTag);
  }

  methodInfoListTag = new grpcWeb.AbstractClientBase.MethodInfo(
    ListTagResponse,
    (request: ListTagRequest) => {
      return request.serializeBinary();
    },
    ListTagResponse.deserializeBinary
  );

  listTag(
    request: ListTagRequest,
    metadata: grpcWeb.Metadata | null): Promise<ListTagResponse>;

  listTag(
    request: ListTagRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ListTagResponse) => void): grpcWeb.ClientReadableStream<ListTagResponse>;

  listTag(
    request: ListTagRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: ListTagResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/tagservice.TagService/ListTag',
        request,
        metadata || {},
        this.methodInfoListTag,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/tagservice.TagService/ListTag',
    request,
    metadata || {},
    this.methodInfoListTag);
  }

  methodInfoListValidTag = new grpcWeb.AbstractClientBase.MethodInfo(
    ListValidTagResponse,
    (request: ListValidTagRequest) => {
      return request.serializeBinary();
    },
    ListValidTagResponse.deserializeBinary
  );

  listValidTag(
    request: ListValidTagRequest,
    metadata: grpcWeb.Metadata | null): Promise<ListValidTagResponse>;

  listValidTag(
    request: ListValidTagRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ListValidTagResponse) => void): grpcWeb.ClientReadableStream<ListValidTagResponse>;

  listValidTag(
    request: ListValidTagRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: ListValidTagResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/tagservice.TagService/ListValidTag',
        request,
        metadata || {},
        this.methodInfoListValidTag,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/tagservice.TagService/ListValidTag',
    request,
    metadata || {},
    this.methodInfoListValidTag);
  }

}

