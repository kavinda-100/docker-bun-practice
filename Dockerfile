# Image
FROM oven/bun:alpine

# Set working directory
WORKDIR /app

# Copy the packages
COPY package.json .

# Copy Bun Lock file
COPY bun.lock .

# Copy the source code
COPY . .

# Install dependencies
RUN bun install

# Expose the port
EXPOSE 5000

# Start the application
CMD ["bun", "run", "dev"]
