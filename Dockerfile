FROM node:22-alpine AS builder
WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm ci --ignore-scripts

COPY . .
RUN npm run build

FROM nginx:1.30-alpine
RUN rm -rf /usr/share/nginx/html/*
COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx/site.conf /etc/nginx/conf.d/default.conf

EXPOSE 80 443