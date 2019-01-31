FROM node:8.7-alpine as devBuild
WORKDIR /usr/src/app

RUN yarn

COPY . .
RUN yarn run build:prod

FROM node:8.7-alpine

WORKDIR /usr/src/app
ENV NODE_ENV=production

COPY --from=devBuild /usr/src/app/build/app ./build/app
COPY package.json yarn.lock README.md ./
RUN yarn install --prod

RUN apk add curl --no-cache

# docker run takes -p argument to forward this port to network
EXPOSE 3000

CMD [ "yarn", "start" ]

HEALTHCHECK CMD curl --silent --fail http://localhost:3000/ || exit 1
