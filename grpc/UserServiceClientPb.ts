/**
 * @fileoverview gRPC-Web generated client stub for userservice
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import {
  CreateUserRequest,
  CreateUserResponse,
  DeleteUserRequest,
  DeleteUserResponse,
  FollowUserRequet,
  FollowUserResponse,
  GuestLoginRequest,
  ListUserRequest,
  ListUserResponse,
  LoginRequest,
  LoginResponse,
  ReadUserRequest,
  ReadUserResponse,
  SuperUserLoginRequest,
  TokenAuthRequest,
  TokenAuthResponse,
  UnFollowUserRequet,
  UnFollowUserResponse,
  UpdateUserRequest,
  UpdateUserResponse} from './user_pb';

export class UserServiceClient {
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

  methodInfoCreateUser = new grpcWeb.AbstractClientBase.MethodInfo(
    CreateUserResponse,
    (request: CreateUserRequest) => {
      return request.serializeBinary();
    },
    CreateUserResponse.deserializeBinary
  );

  createUser(
    request: CreateUserRequest,
    metadata: grpcWeb.Metadata | null): Promise<CreateUserResponse>;

  createUser(
    request: CreateUserRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: CreateUserResponse) => void): grpcWeb.ClientReadableStream<CreateUserResponse>;

  createUser(
    request: CreateUserRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: CreateUserResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/userservice.UserService/CreateUser',
        request,
        metadata || {},
        this.methodInfoCreateUser,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/userservice.UserService/CreateUser',
    request,
    metadata || {},
    this.methodInfoCreateUser);
  }

  methodInfoReadUser = new grpcWeb.AbstractClientBase.MethodInfo(
    ReadUserResponse,
    (request: ReadUserRequest) => {
      return request.serializeBinary();
    },
    ReadUserResponse.deserializeBinary
  );

  readUser(
    request: ReadUserRequest,
    metadata: grpcWeb.Metadata | null): Promise<ReadUserResponse>;

  readUser(
    request: ReadUserRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ReadUserResponse) => void): grpcWeb.ClientReadableStream<ReadUserResponse>;

  readUser(
    request: ReadUserRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: ReadUserResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/userservice.UserService/ReadUser',
        request,
        metadata || {},
        this.methodInfoReadUser,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/userservice.UserService/ReadUser',
    request,
    metadata || {},
    this.methodInfoReadUser);
  }

  methodInfoUpdateUser = new grpcWeb.AbstractClientBase.MethodInfo(
    UpdateUserResponse,
    (request: UpdateUserRequest) => {
      return request.serializeBinary();
    },
    UpdateUserResponse.deserializeBinary
  );

  updateUser(
    request: UpdateUserRequest,
    metadata: grpcWeb.Metadata | null): Promise<UpdateUserResponse>;

  updateUser(
    request: UpdateUserRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: UpdateUserResponse) => void): grpcWeb.ClientReadableStream<UpdateUserResponse>;

  updateUser(
    request: UpdateUserRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: UpdateUserResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/userservice.UserService/UpdateUser',
        request,
        metadata || {},
        this.methodInfoUpdateUser,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/userservice.UserService/UpdateUser',
    request,
    metadata || {},
    this.methodInfoUpdateUser);
  }

  methodInfoDeleteUser = new grpcWeb.AbstractClientBase.MethodInfo(
    DeleteUserResponse,
    (request: DeleteUserRequest) => {
      return request.serializeBinary();
    },
    DeleteUserResponse.deserializeBinary
  );

  deleteUser(
    request: DeleteUserRequest,
    metadata: grpcWeb.Metadata | null): Promise<DeleteUserResponse>;

  deleteUser(
    request: DeleteUserRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: DeleteUserResponse) => void): grpcWeb.ClientReadableStream<DeleteUserResponse>;

  deleteUser(
    request: DeleteUserRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: DeleteUserResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/userservice.UserService/DeleteUser',
        request,
        metadata || {},
        this.methodInfoDeleteUser,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/userservice.UserService/DeleteUser',
    request,
    metadata || {},
    this.methodInfoDeleteUser);
  }

  methodInfoListUser = new grpcWeb.AbstractClientBase.MethodInfo(
    ListUserResponse,
    (request: ListUserRequest) => {
      return request.serializeBinary();
    },
    ListUserResponse.deserializeBinary
  );

  listUser(
    request: ListUserRequest,
    metadata: grpcWeb.Metadata | null): Promise<ListUserResponse>;

  listUser(
    request: ListUserRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: ListUserResponse) => void): grpcWeb.ClientReadableStream<ListUserResponse>;

  listUser(
    request: ListUserRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: ListUserResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/userservice.UserService/ListUser',
        request,
        metadata || {},
        this.methodInfoListUser,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/userservice.UserService/ListUser',
    request,
    metadata || {},
    this.methodInfoListUser);
  }

  methodInfoLogin = new grpcWeb.AbstractClientBase.MethodInfo(
    LoginResponse,
    (request: LoginRequest) => {
      return request.serializeBinary();
    },
    LoginResponse.deserializeBinary
  );

  login(
    request: LoginRequest,
    metadata: grpcWeb.Metadata | null): Promise<LoginResponse>;

  login(
    request: LoginRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: LoginResponse) => void): grpcWeb.ClientReadableStream<LoginResponse>;

  login(
    request: LoginRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: LoginResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/userservice.UserService/Login',
        request,
        metadata || {},
        this.methodInfoLogin,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/userservice.UserService/Login',
    request,
    metadata || {},
    this.methodInfoLogin);
  }

  methodInfoGuestLogin = new grpcWeb.AbstractClientBase.MethodInfo(
    LoginResponse,
    (request: GuestLoginRequest) => {
      return request.serializeBinary();
    },
    LoginResponse.deserializeBinary
  );

  guestLogin(
    request: GuestLoginRequest,
    metadata: grpcWeb.Metadata | null): Promise<LoginResponse>;

  guestLogin(
    request: GuestLoginRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: LoginResponse) => void): grpcWeb.ClientReadableStream<LoginResponse>;

  guestLogin(
    request: GuestLoginRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: LoginResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/userservice.UserService/GuestLogin',
        request,
        metadata || {},
        this.methodInfoGuestLogin,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/userservice.UserService/GuestLogin',
    request,
    metadata || {},
    this.methodInfoGuestLogin);
  }

  methodInfoSuperUserLogin = new grpcWeb.AbstractClientBase.MethodInfo(
    LoginResponse,
    (request: SuperUserLoginRequest) => {
      return request.serializeBinary();
    },
    LoginResponse.deserializeBinary
  );

  superUserLogin(
    request: SuperUserLoginRequest,
    metadata: grpcWeb.Metadata | null): Promise<LoginResponse>;

  superUserLogin(
    request: SuperUserLoginRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: LoginResponse) => void): grpcWeb.ClientReadableStream<LoginResponse>;

  superUserLogin(
    request: SuperUserLoginRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: LoginResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/userservice.UserService/SuperUserLogin',
        request,
        metadata || {},
        this.methodInfoSuperUserLogin,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/userservice.UserService/SuperUserLogin',
    request,
    metadata || {},
    this.methodInfoSuperUserLogin);
  }

  methodInfoTokenAuth = new grpcWeb.AbstractClientBase.MethodInfo(
    TokenAuthResponse,
    (request: TokenAuthRequest) => {
      return request.serializeBinary();
    },
    TokenAuthResponse.deserializeBinary
  );

  tokenAuth(
    request: TokenAuthRequest,
    metadata: grpcWeb.Metadata | null): Promise<TokenAuthResponse>;

  tokenAuth(
    request: TokenAuthRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: TokenAuthResponse) => void): grpcWeb.ClientReadableStream<TokenAuthResponse>;

  tokenAuth(
    request: TokenAuthRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: TokenAuthResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/userservice.UserService/TokenAuth',
        request,
        metadata || {},
        this.methodInfoTokenAuth,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/userservice.UserService/TokenAuth',
    request,
    metadata || {},
    this.methodInfoTokenAuth);
  }

  methodInfoFollowUser = new grpcWeb.AbstractClientBase.MethodInfo(
    FollowUserResponse,
    (request: FollowUserRequet) => {
      return request.serializeBinary();
    },
    FollowUserResponse.deserializeBinary
  );

  followUser(
    request: FollowUserRequet,
    metadata: grpcWeb.Metadata | null): Promise<FollowUserResponse>;

  followUser(
    request: FollowUserRequet,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: FollowUserResponse) => void): grpcWeb.ClientReadableStream<FollowUserResponse>;

  followUser(
    request: FollowUserRequet,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: FollowUserResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/userservice.UserService/FollowUser',
        request,
        metadata || {},
        this.methodInfoFollowUser,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/userservice.UserService/FollowUser',
    request,
    metadata || {},
    this.methodInfoFollowUser);
  }

  methodInfoUnFollowUser = new grpcWeb.AbstractClientBase.MethodInfo(
    UnFollowUserResponse,
    (request: UnFollowUserRequet) => {
      return request.serializeBinary();
    },
    UnFollowUserResponse.deserializeBinary
  );

  unFollowUser(
    request: UnFollowUserRequet,
    metadata: grpcWeb.Metadata | null): Promise<UnFollowUserResponse>;

  unFollowUser(
    request: UnFollowUserRequet,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: UnFollowUserResponse) => void): grpcWeb.ClientReadableStream<UnFollowUserResponse>;

  unFollowUser(
    request: UnFollowUserRequet,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: UnFollowUserResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/userservice.UserService/UnFollowUser',
        request,
        metadata || {},
        this.methodInfoUnFollowUser,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/userservice.UserService/UnFollowUser',
    request,
    metadata || {},
    this.methodInfoUnFollowUser);
  }

}

