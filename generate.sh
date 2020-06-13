#!/bin/sh
DIR=$(cd $(dirname $0); pwd);
CLIENT_OUT_DIR="/grpc";
PROTO_PATH="protoc blog.proto";

if [ -e $DIR$CLIENT_OUT_DIR ]; then
  break
else
  mkdir $DIR$CLIENT_OUT_DIR
fi

protoc \
  --proto_path=${PROTO_PATH} \
  --js_out=import_style=commonjs:${DIR}${CLIENT_OUT_DIR} \
  --grpc-web_out=import_style=typescript,mode=grpcweb:${DIR}${CLIENT_OUT_DIR}
