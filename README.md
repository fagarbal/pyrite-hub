## run and install only with docker

```bash
$ sudo docker-compose up
```


## Installation

```bash
$ npm install
```

## run in development mode

```bash
$ sudo docker-compose up -d mongo-express
$ npm run watch
```

## run in production mode

```bash
$ npm run build
$ npm start
```

## usefull urls

- graphql testing tool: http://localhost:8080/graphiql
- mongodb admin interface: http://localhost:1234