# docker-bun-practice

To install dependencies:

```bash
bun install
```

To run:

```bash
bun run index.ts
```

This project was created using `bun init` in bun v1.2.4. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.

## Old one

```yml
services:
  backend:
    build: .
    image: backend-bun-image:v1
    ports:
      - "5000:5000"
    environment:
      - PORT=5000
      - CHOKIDAR_USEPOLLING=true
    volumes:
      - .:/app
      - /app/node_modules
    container_name: backend-bun-container
    develop:
      watch:
        - action: sync
          path: ./
          target: /src/
          ignore:
            - node_modules/
        - action: rebuild
          path: package.json
```
