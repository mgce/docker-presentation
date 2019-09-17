# base image
FROM node:12.2.0-alpine as build

# set working directory
WORKDIR /app

# install and cache app dependencies
COPY package.json ./package.json
RUN npm install --silent
COPY . .
RUN npm run build

FROM nginx:1.13.12-alpine
COPY --from=build ./app/build /usr/share/nginx/html
EXPOSE 80
ENTRYPOINT ["nginx", "-g", "daemon off;"]