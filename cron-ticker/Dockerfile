
# To this part, I'll call it as "deps" this will be the name of the server
# Development dependencies
FROM node:19.2-alpine3.16 as deps 
WORKDIR /app 
COPY package.json ./
RUN npm install 

# Build and test 
FROM node:19.2-alpine3.16 as builder 
WORKDIR /app 
COPY --from=deps /app/node_modules /app/node_modules
COPY . . 
RUN npm run test

# Dependencies only for production 
FROM node:19.2-alpine3.16 as prod-deps 
WORKDIR /app 
COPY package.json ./
RUN npm install --prod

# Execute the app 
FROM node:19.2-alpine3.16 as runner 
WORKDIR /app 
COPY --from=prod-deps /app/node_modules /app/node_modules
COPY app.js ./
COPY tasks/ ./tasks
CMD [ "node","app.js" ]