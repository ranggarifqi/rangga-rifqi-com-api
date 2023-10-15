# Use an official Node.js runtime as the base image
FROM node:14

# Set the working directory in the container to /app
WORKDIR /app

# Copy the package.json and package-lock.json to the container's working directory
COPY package*.json ./

# Install app dependencies inside the container
RUN npm install

# Copy the rest of the application to the container's working directory
COPY . .

# Build the TypeScript files
RUN npm run build

# Expose port 1337 so it can be accessed from outside the container
EXPOSE 1337

# The command to run the Strapi application when the container starts
CMD ["npm", "start"]
