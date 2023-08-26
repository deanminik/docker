#1. We are going to work in the directory app, it is created by alpine
FROM node:19.2-alpine3.16

#2. Change the directoy to the app
WORKDIR /app 

#3. Dest /app with those files
COPY app.js package.json ./

#4. Then install all node dependencies written in package.json
RUN npm install 

#5. Execute your node project npm start if add it in the package.json or node app.js
#This command tells to docker, hei run in the container this command
CMD [ "node","app.js" ]