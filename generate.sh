#!/bin/sh
DIR=$(cd "$(dirname "$0")" || exit 1 ; pwd);
CLIENT_OUT_DIR="/grpc";
PROTO_PATH="./protoc";
POST_PROTO_FILE="post.proto";
TAG_PROTO_FILE="tag.proto";
USER_PROTO_FILE="user.proto";

if [ ! -e "$DIR$CLIENT_OUT_DIR" ]; then
  mkdir "$DIR$CLIENT_OUT_DIR"
fi

protoc \
  --js_out=import_style=commonjs:"${DIR}${CLIENT_OUT_DIR}" \
  --grpc-web_out=import_style=typescript,mode=grpcwebtext:"${DIR}${CLIENT_OUT_DIR}" \
  -I"${PROTO_PATH}" "${POST_PROTO_FILE}"

protoc \
  --js_out=import_style=commonjs:"${DIR}${CLIENT_OUT_DIR}" \
  --grpc-web_out=import_style=typescript,mode=grpcwebtext:"${DIR}${CLIENT_OUT_DIR}" \
  -I"${PROTO_PATH}" "${TAG_PROTO_FILE}"

protoc \
  --js_out=import_style=commonjs:"${DIR}${CLIENT_OUT_DIR}" \
  --grpc-web_out=import_style=typescript,mode=grpcwebtext:"${DIR}${CLIENT_OUT_DIR}" \
  -I"${PROTO_PATH}" "${USER_PROTO_FILE}"
