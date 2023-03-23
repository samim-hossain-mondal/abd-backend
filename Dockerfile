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

# Bundle app source
COPY . .

EXPOSE 3001
ENTRYPOINT ["npm", "run", "dev"]