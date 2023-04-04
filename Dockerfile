FROM node

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

# generated prisma files
COPY prisma ./prisma/

RUN npm i --production
RUN npm run generate

# Bundle app source
COPY . .

EXPOSE 3001

# CMD [ "npm", "run", "migrate" ]
ENTRYPOINT ["npm", "run", "dev:prod"]