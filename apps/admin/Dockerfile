# Base image for dependencies
FROM node:18-alpine AS base

# Install curl
RUN apk add --no-cache curl

# Install necessary system dependencies
RUN apk add --no-cache openssl

# Set working directory
WORKDIR /app

# Copy root package.json and package-lock.json
COPY package*.json ./


# Copy web package.json to install dependencies
COPY apps/admin/package*.json ./apps/admin/

# Install dependencies for all packages
RUN npm ci --legacy-peer-deps

# Copy the rest of the application code
COPY . .

# Production build for Next.js
WORKDIR /app/apps/web
RUN npm run build

# Set environment variable
ENV NODE_ENV=production

# Expose the port the app runs on
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
