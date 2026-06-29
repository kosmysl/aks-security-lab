FROM node:26-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install --omit=dev

COPY server.js ./

RUN addgroup -S -g 10001 appgroup && adduser -S -u 10001 -G appgroup appuser
USER 10001

EXPOSE 8080

CMD ["node", "server.js"]
