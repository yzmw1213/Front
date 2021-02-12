import * as jspb from "google-protobuf"

export class Tag extends jspb.Message {
  getTagId(): number;
  setTagId(value: number): Tag;

  getTagName(): string;
  setTagName(value: string): Tag;

  getStatus(): number;
  setStatus(value: number): Tag;

  getCreateuserId(): number;
  setCreateuserId(value: number): Tag;

  getUpdateuserId(): number;
  setUpdateuserId(value: number): Tag;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Tag.AsObject;
  static toObject(includeInstance: boolean, msg: Tag): Tag.AsObject;
  static serializeBinaryToWriter(message: Tag, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Tag;
  static deserializeBinaryFromReader(message: Tag, reader: jspb.BinaryReader): Tag;
}

export namespace Tag {
  export type AsObject = {
    tagId: number,
    tagName: string,
    status: number,
    createuserId: number,
    updateuserId: number,
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

export class CreateTagRequest extends jspb.Message {
  getTag(): Tag | undefined;
  setTag(value?: Tag): CreateTagRequest;
  hasTag(): boolean;
  clearTag(): CreateTagRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateTagRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateTagRequest): CreateTagRequest.AsObject;
  static serializeBinaryToWriter(message: CreateTagRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateTagRequest;
  static deserializeBinaryFromReader(message: CreateTagRequest, reader: jspb.BinaryReader): CreateTagRequest;
}

export namespace CreateTagRequest {
  export type AsObject = {
    tag?: Tag.AsObject,
  }
}

export class CreateTagResponse extends jspb.Message {
  getStatus(): ResponseStatus | undefined;
  setStatus(value?: ResponseStatus): CreateTagResponse;
  hasStatus(): boolean;
  clearStatus(): CreateTagResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateTagResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateTagResponse): CreateTagResponse.AsObject;
  static serializeBinaryToWriter(message: CreateTagResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateTagResponse;
  static deserializeBinaryFromReader(message: CreateTagResponse, reader: jspb.BinaryReader): CreateTagResponse;
}

export namespace CreateTagResponse {
  export type AsObject = {
    status?: ResponseStatus.AsObject,
  }
}

export class UpdateTagRequest extends jspb.Message {
  getTag(): Tag | undefined;
  setTag(value?: Tag): UpdateTagRequest;
  hasTag(): boolean;
  clearTag(): UpdateTagRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateTagRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateTagRequest): UpdateTagRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateTagRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateTagRequest;
  static deserializeBinaryFromReader(message: UpdateTagRequest, reader: jspb.BinaryReader): UpdateTagRequest;
}

export namespace UpdateTagRequest {
  export type AsObject = {
    tag?: Tag.AsObject,
  }
}

export class UpdateTagResponse extends jspb.Message {
  getStatus(): ResponseStatus | undefined;
  setStatus(value?: ResponseStatus): UpdateTagResponse;
  hasStatus(): boolean;
  clearStatus(): UpdateTagResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateTagResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateTagResponse): UpdateTagResponse.AsObject;
  static serializeBinaryToWriter(message: UpdateTagResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateTagResponse;
  static deserializeBinaryFromReader(message: UpdateTagResponse, reader: jspb.BinaryReader): UpdateTagResponse;
}

export namespace UpdateTagResponse {
  export type AsObject = {
    status?: ResponseStatus.AsObject,
  }
}

export class DeleteTagRequest extends jspb.Message {
  getTagId(): number;
  setTagId(value: number): DeleteTagRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteTagRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteTagRequest): DeleteTagRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteTagRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteTagRequest;
  static deserializeBinaryFromReader(message: DeleteTagRequest, reader: jspb.BinaryReader): DeleteTagRequest;
}

export namespace DeleteTagRequest {
  export type AsObject = {
    tagId: number,
  }
}

export class DeleteTagResponse extends jspb.Message {
  getStatus(): ResponseStatus | undefined;
  setStatus(value?: ResponseStatus): DeleteTagResponse;
  hasStatus(): boolean;
  clearStatus(): DeleteTagResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteTagResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteTagResponse): DeleteTagResponse.AsObject;
  static serializeBinaryToWriter(message: DeleteTagResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteTagResponse;
  static deserializeBinaryFromReader(message: DeleteTagResponse, reader: jspb.BinaryReader): DeleteTagResponse;
}

export namespace DeleteTagResponse {
  export type AsObject = {
    status?: ResponseStatus.AsObject,
  }
}

export class ListTagRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListTagRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListTagRequest): ListTagRequest.AsObject;
  static serializeBinaryToWriter(message: ListTagRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListTagRequest;
  static deserializeBinaryFromReader(message: ListTagRequest, reader: jspb.BinaryReader): ListTagRequest;
}

export namespace ListTagRequest {
  export type AsObject = {
  }
}

export class ListTagResponse extends jspb.Message {
  getTagList(): Array<Tag>;
  setTagList(value: Array<Tag>): ListTagResponse;
  clearTagList(): ListTagResponse;
  addTag(value?: Tag, index?: number): Tag;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListTagResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListTagResponse): ListTagResponse.AsObject;
  static serializeBinaryToWriter(message: ListTagResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListTagResponse;
  static deserializeBinaryFromReader(message: ListTagResponse, reader: jspb.BinaryReader): ListTagResponse;
}

export namespace ListTagResponse {
  export type AsObject = {
    tagList: Array<Tag.AsObject>,
  }
}

export class ListValidTagRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListValidTagRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListValidTagRequest): ListValidTagRequest.AsObject;
  static serializeBinaryToWriter(message: ListValidTagRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListValidTagRequest;
  static deserializeBinaryFromReader(message: ListValidTagRequest, reader: jspb.BinaryReader): ListValidTagRequest;
}

export namespace ListValidTagRequest {
  export type AsObject = {
  }
}

export class ListValidTagResponse extends jspb.Message {
  getTagList(): Array<Tag>;
  setTagList(value: Array<Tag>): ListValidTagResponse;
  clearTagList(): ListValidTagResponse;
  addTag(value?: Tag, index?: number): Tag;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListValidTagResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListValidTagResponse): ListValidTagResponse.AsObject;
  static serializeBinaryToWriter(message: ListValidTagResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListValidTagResponse;
  static deserializeBinaryFromReader(message: ListValidTagResponse, reader: jspb.BinaryReader): ListValidTagResponse;
}

export namespace ListValidTagResponse {
  export type AsObject = {
    tagList: Array<Tag.AsObject>,
  }
}

