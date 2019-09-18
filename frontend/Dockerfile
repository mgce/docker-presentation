FROM node:12.2.0-alpine as build

WORKDIR /app

COPY package.json ./package.json
RUN npm install --silent
COPY . .
RUN npm run build

FROM nginx:1.13.12-alpine
COPY --from=build ./app/build /usr/share/nginx/html
EXPOSE 80
ENTRYPOINT ["nginx", "-g", "daemon off;"]