# Use the appropriate base image
FROM node:18-alpine

# Create app directory
WORKDIR /app

# Copy package.json and package-lock.json from client folder
COPY ./client/package*.json /app/

# Install dependencies
RUN npm install --legacy-peer-deps

# Copy the rest of the code
COPY ./client/ /app/

# Expose port and run
EXPOSE 3000
CMD ["npm", "start"]
