
---

## 🐳 `Dockerfile` (إن أحببت تشغيله في Docker لاحقًا)

```Dockerfile
# Stage 1: build
FROM node:20 AS build
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

# Stage 2: serve
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
