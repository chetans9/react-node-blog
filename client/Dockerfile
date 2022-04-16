FROM node:17-alpine3.14
WORKDIR /app-client
COPY package.json /app-client
RUN npm install
COPY . /app-client
CMD ["npm","start"]

