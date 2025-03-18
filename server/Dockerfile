# Use the official Node.js image with the latest LTS version
FROM node:18-alpine
# Create and set the working directory
WORKDIR /app
# Copy package.json and package-lock.json
COPY package*.json ./
# Install dependencies
RUN npm install --legacy-peer-deps
# Copy the rest of the application code
COPY . .
# Expose the port Nginx runs on
EXPOSE 8080
# Start Nginx
CMD ["npm","start"]