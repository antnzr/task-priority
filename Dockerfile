FROM node:13

WORKDIR /opt/server/

COPY package*.json ./

RUN npm install

COPY ./ /opt/server/

WORKDIR /opt/server/

EXPOSE 7000

CMD npm run start