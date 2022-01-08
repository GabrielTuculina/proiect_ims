FROM node:14-alpine

WORKDIR /app

COPY package*.json ./

RUN ["npm", "install"]

RUN ["npm", "ci"]

COPY . .

EXPOSE 3000

CMD ["node", "server.js"]
