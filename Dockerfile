# Multi-stage Docker file
#  1) Build the node project with the latest version of node
#  2) NGNIX to serve the production front end packed via webpack

# Stage 1: Building the application
FROM node:latest AS build

ARG VERSION_NUMBER
ENV VITE_BUILD_VERSION ${VERSION_NUMBER}

WORKDIR /app

# Copy the app to the working directory on the image
COPY . /app

# Install node modules and build application
RUN yarn install && yarn build

# Stage 2: Serve content using NGINX Web Server
FROM nginx:alpine AS nginx-server

ENV NODE_ENV production

WORKDIR /usr/share/nginx/html
# Remove default nginx static assets (50x.html & index.html)
RUN rm -rf ./*
# Copy static assets from builder stage
COPY --from=build /app/dist .

# Expose port 80 out of container
EXPOSE 80

# Remove the developer configuration
RUN rm -rf ./runtime-config.js

# 1. Use bash to call envsubst -> environment substitution to replace the template.js
# 2. Run nginx
CMD ["/bin/sh",  "-c",  "envsubst < /usr/share/nginx/html/assets/runtime-config.template.js > /usr/share/nginx/html/assets/runtime-config.js && exec nginx -g 'daemon off;'"]