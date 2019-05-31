# Express Microservices Monorepo

> Express.js project with routes as microservices

## Getting started

That project uses a cryptocurrency API as example for an RESTful [`express`](https://github.com/expressjs/express) application that has routes as small packages. That approach allows to run split the app into small instances easily.

#### 1. Install

```shell
git clone https://github.com/marcelomorgado/microservices-monorepo.git
cd microservices-monorepo
npm run bootstrap
```

#### 2. Configure

```shell
cd packages/app
cp .env.example .env
# Change ROUTES param with the packages that should be used by the app
vi .env
```

#### 3. Start

```shell
npm start
```

**Note:** The main `start` script will call the `start` script from `app` package.



## Developing

### Structure

The packages were organized that way:

```
.
├── packages/
|   ├── app/ <-- The express main project with middlewares and configs
|   ├── common/ <-- Shared code (utils, errors, etc)
|   ├── assets/ <-- /assets routes
|   └── prices/ <-- /prices routes
```

### Setting up Dev

The script below is recommended during development because it uses [`nodaemon`](https://www.npmjs.com/package/nodaemon):

```shell
cd packages/app
npm run start-dev
```

## Tests

Use the `test` script to run unit and coverage tests.

**Important:** The tests will restore the database to the initial state.

```shell
# Unit tests
npm test

# Check lint
npm run lint

# Integration tests (The app should be started)
cd packages/app
npm run test:integration
```



## Adding a new route

Use the following steps to add a new route to the project:

```bash
# Create a new package
npx lerna create new_route -y --dependencies express common

# Add as `app` dependency
npx lerna add new_route --scope=app
```



