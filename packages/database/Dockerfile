# Base image
FROM node:18

# Set working directory
WORKDIR /app

# Copy package files
COPY packages/database/package*.json ./

# Install dependencies
RUN npm install

# Copy the Prisma schema and any required files
COPY packages/database ./

# Prisma generate and migrate commands will be handled by the `prisma-migrate` service
