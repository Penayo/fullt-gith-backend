FROM node:16

WORKDIR /app

COPY --chown=node:node package*.json ./

RUN npm ci

COPY --chown=node:node . .

ENV NODE_ENV production

RUN npm run build

USER node

CMD npm run start:prod

