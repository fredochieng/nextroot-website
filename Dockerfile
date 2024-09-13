# Use the official Node.js image as the base image
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the working directory
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy all files to the container
COPY . .

# Build the Nuxt app for production
RUN npm run build

# Expose the port the app will run on
EXPOSE 3000

# Start the Nuxt app
CMD ["npm", "run", "preview"]
