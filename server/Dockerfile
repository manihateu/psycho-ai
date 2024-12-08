FROM node:23

WORKDIR /usr/src/app/server

COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile
RUN npx prisma migrate deploy

COPY . .

RUN yarn build

EXPOSE 3000

CMD ["yarn", "start:prod"]