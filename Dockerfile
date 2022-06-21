FROM node:15-alpine
 
# Add the following line 
ENV CI=true
 
WORKDIR /app/src
COPY package.json ./
RUN npm install
COPY ./ ./
 
CMD ["npm", "start"]