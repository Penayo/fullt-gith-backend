<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

## Description

This is code challenge project that connect width github API using [Octokit](https://github.com/octokit/octokit.js)

## Installation
First, create an .env file in the project root
and add next environment variables on it

PORT=8000
MODE=DEV
REPO_OWNER=Penayo
GITHUB_PERSONAL_TOKEN=...

Second, make sure you have node version 16 or 16+

```bash
$ npm install
```

## Running with docker-compose
In this part, if you have docker and docker-compose installed in your computer,
You can run the next command in the project root.

```bash
$ docker-compose up --build
```
and the server will be online

## Running manually

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev
```

# Run the client project
Clone the client repository
```bash
git clone https://github.com/Penayo/fullt-gith-client.git
```

then run
```bash
$ npm install
```

and
```bash
$ npm start
```

Open browser at http://localhost:3000
Make sure the client is running in port 3000, otherwise the server will block it

## License

Nest is [MIT licensed](LICENSE).
