# Use official Node.js Alpine base image
FROM node:22.1.0-alpine

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
RUN echo "Starting the Node.js app..."

# Start the app
CMD ["npm", "start"]
