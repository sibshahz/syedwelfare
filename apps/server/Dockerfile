# Base image for dependencies
FROM node:18-alpine AS base

# Install curl
RUN apk add --no-cache curl

# Install necessary system dependencies
RUN apk add --no-cache openssl

# Set working directory
WORKDIR /app

# Copy root package.json and install dependencies
COPY package*.json ./

# Copy db package.json to install dependencies
COPY packages/database/package*.json ./packages/database/

# Copy web package.json to install dependencies
COPY apps/server/package*.json ./apps/server/

RUN npm install

# Copy the whole codebase
COPY . .

# # generate prisma client
WORKDIR /app/packages/database
RUN npx prisma generate

# Migrate and build
WORKDIR /app/apps/server

# Install dependencies for the server package
RUN npm install

# Run build command
# RUN npm run build

# Expose the port the app runs on
EXPOSE 8080
# Update the CMD to wait for the database before running migrations
CMD ["sh", "-c", "npm run build && node dist/index.js"]