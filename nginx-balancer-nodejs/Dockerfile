FROM node:alpine
WORKDIR /app
COPY package.json /app/package.json
RUN npm i
COPY . /app/
CMD ["node","index.js"]
