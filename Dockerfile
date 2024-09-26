# Use an official Node.js image as the base
FROM node:14

# Set the working directory
WORKDIR /usr/src/app

# Copy the package files and install dependencies
COPY backend/package*.json ./
RUN npm install

# Copy the application files
COPY backend/ .

# Expose port 3000 for the web application
EXPOSE 3000

# Start the application
CMD ["node", "app.js"]

