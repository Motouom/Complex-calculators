# use official node.js runtime as base image
FROM node:18-slim

#set a working directory
WORKDIR /app

#copy project fijles into the container
COPY . .

# installing a simple static file server. NPM: node package manager
RUN npm install -g serve

#expose the port where the server will run
EXPOSE 5003

# command to run the static file server \
CMD ["serve", "-s", ".", "-l", "5003"]
