FROM node:10.14.1-alpine

RUN apk --update add \
  curl \
  unzip \
  protobuf

RUN mkdir -p /tmp/protoc && \  
  curl -L https://github.com/protocolbuffers/protobuf/releases/download/v3.11.0/protoc-3.11.0-linux-x86_64.zip > /tmp/protoc/protoc.zip && \  
  cd /tmp/protoc && \  
  unzip protoc.zip && \  
  cp /tmp/protoc/bin/protoc /usr/local/bin && \  
  chmod go+rx /usr/local/bin/protoc && \  
  cd /tmp && \  
  rm -r /tmp/protoc

RUN mkdir -p /tmp/protoc-gen-grpc-web && \
  curl -L https://github.com/grpc/grpc-web/releases/download/1.1.0/protoc-gen-grpc-web-1.1.0-linux-x86_64 > /tmp/protoc-gen-grpc-web/protpc-gen-grpc-web && \
  mv /tmp/protoc-gen-grpc-web/protpc-gen-grpc-web /usr/local/bin/protoc-gen-grpc-web && \
  chmod +x /usr/local/bin/protoc-gen-grpc-web

WORKDIR /app

COPY . /app

ENV NODE_ENV development

RUN npm i \
    npm install eslint-plugin-prettier eslint-config-prettier --save-dev
