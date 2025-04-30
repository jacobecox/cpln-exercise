# Use official Node.js Alpine base image
FROM node:22.1.0-alpine

# Update package index
RUN apk update

# Install busybox-extras (often includes telnet)
RUN apk add --no-cache busybox-extras

# Set working directory
WORKDIR /app

# Copy dependency definitions
COPY package*.json ./

# Install all dependencies
RUN npm install

# Copy all other source code
COPY . .

# Expose app port
EXPOSE 3000

# Log start
RUN echo "Starting the Node.js app with telnet..."

# Start the app
CMD ["npm", "start"]