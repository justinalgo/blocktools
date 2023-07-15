FROM node:alpine

WORKDIR /home/node/app

COPY package*.json ./

RUN pwd && ls -lah

RUN npm install

EXPOSE 3000

CMD ["npm", "run", "dev"]
