# Use an official Node.js runtime as a parent image
FROM node:18

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install global dependencies
RUN npm install -g @nestjs/cli

# Install project dependencies
RUN npm install

# Verify node_modules is created
# RUN echo "Checking node_modules after npm install:" && ls -la node_modules

# Copy the rest of the application code to the working directory
COPY . .

# # Verify the application code is copied correctly
# RUN echo "Checking contents of /app directory:" && ls -la

# Build the NestJS app
RUN npm run build

# Expose the port the app runs on
EXPOSE 3001

# Command to run the app in development mode
CMD ["npm", "run", "start:dev"]
