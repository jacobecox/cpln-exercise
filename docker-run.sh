#!/bin/bash

# Build the Docker image
echo "Building Docker image..."
docker build -t cpln-exercise .

# Run the Docker container
echo "Running Docker container..."
docker run -p 3000:3000 --name cpln-exercise-container cpln-exercise 