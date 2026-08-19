FROM node:22-alpine

WORKDIR /app2

COPY package*.json ./

RUN npm ci

COPY . .

EXPOSE 3000

CMD ["npm", "start"]