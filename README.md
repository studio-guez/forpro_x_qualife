# Forpro x Qualife - Nuxt 3 Application

A modern web application built with Nuxt 3, running on Node.js 20 in a Docker environment.

## Clone & Docker instructions

1. `git clone https://github.com/studio-guez/forpro_x_qualife.fit`
1. `cd forpro_x_qualife/`
1. _Verify config, especially port conflicts in_ `docker-compose.yml`

## Local Development (with Docker)

```bash
docker-compose up
```

This will:
- Mount your local files into the container
- Install dependencies automatically
- Start the Nuxt dev server with hot-reload
- The application will be available at http://localhost:3000

## Production Build (with Docker)

```bash
docker-compose --profile production up app
```

This will build and run the production SSR server at http://localhost:3001

## Running npm commands in Docker

To run any npm command inside the container:

```bash
docker-compose exec dev npm run <command>
```

Or open a shell in the container:

```bash
docker-compose exec dev sh
```

## Build for production

1. `npm run build`
1. `npm run preview` to preview the production build locally

## Generate static site

1. `npm run generate`
1. Static files will be output to `docs/`

## Default access URLs (with default ports)

- **Application**: http://localhost:3000
