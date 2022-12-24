# Multi-stage
# 1) Node image for building frontend assets
# 2) nginx stage to serve frontend assets

# Name the node stage "builder"
FROM node:latest AS builder
# Set working directory
WORKDIR /app
# Copy all files from current directory to working dir in image
COPY . .
ARG REACT_APP_API_HOST
ENV REACT_APP_API_HOST=${REACT_APP_API_HOST}
# install node modules and build assets
RUN yarn install && yarn build

# nginx state for serving content
FROM nginx:alpine
# Set working directory to nginx asset directory
WORKDIR /usr/share/nginx/html

# Remove default nginx static assets
RUN rm -rf ./*
# Copy static assets from builder stage
COPY --from=builder /app/build .
COPY conf /etc/nginx
COPY certs/nginx-certificate.crt /etc/nginx/certificate/nginx-certificate.crt
COPY certs/nginx.key /etc/nginx/certificate/nginx.key

EXPOSE 80 443
# Containers run nginx with global directives and daemon off
ENTRYPOINT ["nginx", "-g", "daemon off;"]
