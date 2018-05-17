## run and install only with docker

```bash
$ sudo docker-compose up
```

## Installation npm

```bash
$ npm install
```

## run in development mode

```bash
$ sudo docker-compose up -d mongo
$ npm run watch
```

## run in production mode

```bash
$ npm run build
$ npm start
```

## usefull urls

- website: http://localhost:8080
- graphql testing tool: http://localhost:8080/graphiql
- mongodb admin interface: http://localhost:1234