FROM node:18-alpine as base
WORKDIR /app

COPY package.json package-lock.json /


FROM base as test
RUN npm ci
COPY . .
RUN npm run test


FROM base as prod
RUN npm install

COPY . .
RUN npm run build
RUN npm install

CMD ["node", "build/server.js"]