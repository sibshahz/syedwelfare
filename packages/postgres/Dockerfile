# Use the official PostgreSQL 15 image as the base
FROM postgres:15

# Copy custom SQL scripts or configuration files to the appropriate directory
# Scripts in /docker-entrypoint-initdb.d/ will automatically run on the first database initialization
# COPY ./init.sql /docker-entrypoint-initdb.d/
# Uncomment below to copy additional configuration files if needed
# COPY ./postgres.conf /etc/postgresql/postgresql.conf

# Ensure correct permissions for copied files (optional, depending on your script setup)
# RUN chmod 755 /docker-entrypoint-initdb.d/init.sql

# Expose the PostgreSQL default port
EXPOSE 5432
