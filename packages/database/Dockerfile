# Base image
FROM node:18-alpine AS base

# Install necessary dependencies
RUN apk add --no-cache openssl

# Install Prisma CLI globally
RUN npm install -g prisma

# Set working directory
WORKDIR /app

# First copy root package files
COPY package*.json ./
COPY packages/database/package*.json ./packages/database/

# Install dependencies
# Use --prefix to install in the correct directory
RUN npm install --prefix packages/database

# Copy the entire workspace configuration
COPY . .

# Generate Prisma Client
RUN cd packages/database && \
    npx prisma generate

# Set up entry point script
RUN echo '#!/bin/sh\n\
cd packages/database\n\
npx prisma migrate deploy\n\
npx prisma generate\n\
exec "$@"' > /docker-entrypoint.sh

RUN chmod +x /docker-entrypoint.sh

ENTRYPOINT ["/docker-entrypoint.sh"]

# Default command (can be overridden)
CMD ["node", "index.js"]