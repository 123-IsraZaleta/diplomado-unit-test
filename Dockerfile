FROM node:14-alpine

WORKDIR /app/node

COPY package*.json ./

RUN npm install

COPY . ./

EXPOSE 5051

CMD ["node", "app"]