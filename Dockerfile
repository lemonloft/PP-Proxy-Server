FROM node:10.17-alpine

RUN apk update && apk upgrade && apk add bash

RUN mkdir -p /src/app

WORKDIR /src/app

COPY . /src/app

RUN npm install

EXPOSE 3000

# CMD [ "npm", "run", "server" ]