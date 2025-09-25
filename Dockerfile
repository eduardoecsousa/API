FROM node:20-alpine

# Update Alpine packages to patch vulnerabilities
RUN apk update && apk upgrade --no-cache

WORKDIR /api
COPY package*.json ./
RUN npm ci
COPY . .
EXPOSE 3001
ENTRYPOINT ["npm", "run", "dev"]