# Docker Bun Example

This is a simple example of a Dockerized Bun application. It uses Bun as the JavaScript runtime and includes a basic setup for running a server with TypeScript and Express. It also includes a Dockerfile for building the application image and a `docker-compose.yml` file for running the application in a container. and it use docker latest feature `develop` to sync files and rebuild the container when changes are made instead of volumes.

## Features

- Uses Bun as the JavaScript runtime
- TypeScript for type safety
- Express for handling HTTP requests
- Dockerized for easy deployment
- Automatically rebuilds the container when changes are made using Docker's `develop` feature
- Includes a simple health check endpoint
- Uses `bun.lockb` for dependency management
- Includes a Dockerfile for building the application image
- Includes a `docker-compose.yml` file for running the application in a container

### Usage

1. Clone the repository:

   ```bash
   git clone https://github.com/kavinda-100/docker-bun-practice.git
   ```

2. Navigate to the project directory:

   ```bash
   cd docker-bun-practice
   ```

3. Build and run the application using Docker Compose:

   ```bash
   docker-compose up --watch
   ```

4. Stop the application:

   ```bash
   docker-compose down
   ```

>[!NOTE]
> The `docker compose down` command stops and removes the containers, networks, and volumes created by >`docker-compose up`. If you want to keep the data in the volumes, you can use `docker-compose stop` instead.

>[!Important]
> Make sure you have Docker and Docker Compose installed on your machine. The `--watch` flag is used to enable the `develop` feature, which allows for automatic sync of the container when changes are made to the source files.

- Open your browser and navigate to `http://localhost:5000` to see the application running.

### Routes

- `GET /`: Returns a simple message indicating that the server is running.
- `GET /health`: Returns a health check message indicating that the server is healthy.
- `GET /api/v1/posts`: Returns a Message indicating that the posts endpoint is working.

### Other Commands

- To run the application without Docker Compose, you can use the following command:

  ```bash
  bun run dev
  ```

- To  remove the Docker image and container, you can use the following command:

  ```bash
  docker-compose down
  ```

- To rebuild the Docker image, you can use the following command:

  ```bash
  docker-compose build
  ```

- To remove the Docker container, you can use the following command:

  ```bash
  docker rm backend-bun-container
  ```

- To remove the Docker image, you can use the following command:

  ```bash
  docker rmi docker-bun-practice
  ```

### Folder Structure

```
docker-bun-practice/
├── src/
│   ├── routes/
│   │   ├── index.ts
│   │   └── post.route.ts
│   └── index.ts
├── Dockerfile
├── docker-compose.yml
├── .dockerignore
├── .gitignore
├── .env
├── package.json
├── bun.lockb
├── tsconfig.json
└── README.md
```
