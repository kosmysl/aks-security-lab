FROM node:22-alpine

WORKDIR /app

COPY pakage*.json ./
RUN npm install --omit=dev

COPY server.js ./

RUN addgroup -S appgroup && adduser -S appuser -G appgroup
USER appuser

EXPOSE 8080

CMD ["node", "server.js"]
