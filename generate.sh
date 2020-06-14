#!/bin/sh
DIR=$(cd "$(dirname "$0")" || exit 1 ; pwd);
CLIENT_OUT_DIR="/grpc";
PROTO_PATH="./protoc";
PROTO_FILE="blog.proto";

if [ ! -e "$DIR$CLIENT_OUT_DIR" ]; then
  mkdir "$DIR$CLIENT_OUT_DIR"
fi

protoc \
  --js_out=import_style=commonjs:"${DIR}${CLIENT_OUT_DIR}" \
  --grpc-web_out=import_style=typescript,mode=grpcweb:"${DIR}${CLIENT_OUT_DIR}" \
  -I"${PROTO_PATH}" "${PROTO_FILE}"
