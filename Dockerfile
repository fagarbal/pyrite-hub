FROM node:carbon

RUN mkdir app
WORKDIR /app

ADD /.env-docker /app/.env
ADD /package.json /app/package.json
ADD /nodemon.json /app/nodemon.json
ADD /tsconfig.json /app/tsconfig.json
ADD /next.config.js /app/next.config.js

RUN npm install

EXPOSE 8080

CMD npm run watch