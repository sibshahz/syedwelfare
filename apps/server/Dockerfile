# Base image for dependencies
FROM node:18-alpine AS base

# Install necessary system dependencies
RUN apk add --no-cache curl openssl

# Set working directory
WORKDIR /app

# Copy root package.json and install dependencies
COPY package*.json ./

# Copy db package.json to install dependencies
COPY packages/database/package*.json ./packages/database/

# Copy web package.json to install dependencies
COPY apps/server/package*.json ./apps/server/

# Install dependencies
RUN npm install

# Copy the whole codebase
COPY . .

# # Generate Prisma client
WORKDIR /app/packages/database
RUN npx prisma generate

# Migrate and build
WORKDIR /app/apps/server

# Install server package dependencies
RUN npm install

# Build the server code
RUN npm run build

# Copy package.json to dist folder (in case bcrypt needs it there)
RUN cp /app/package.json /app/apps/server/dist/

# Expose the port the app runs on
EXPOSE 8080

# Update the CMD to wait for the database before running migrations
CMD ["sh", "-c", "npm run build && node ./dist/index.js"]
