FROM node:alpine3.14

WORKDIR /opt/web-app/app
COPY *.json ./
RUN npm install
EXPOSE 8080
COPY index.js ./
CMD ["node","index.js"]