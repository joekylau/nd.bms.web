FROM node:14.15.1-buster AS builder
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
RUN npm run build

FROM nginx:latest
COPY --from=builder /app/dist /usr/share/nginx/html
