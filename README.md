## Description

This is a technical test project.

Is developed with [Nest.js](https://nestjs.com/) in backend and [react.js](https://reactjs.org/) in frontend, wich it is [anhother repository](https://github.com/Penayo/fullt-gith-client)

More technical details are in the welcome page of the running project, so let's go with the installation guide.

## Installation
Deploy the project with docker

if you don't have docker installed, please see the [docker instalation page](https://www.docker.com/get-started/)

First start the backend

```bash
docker run -p 8000:8000 penayo/fullt-gith-backend:latest
```

and then start the frontend, open a new terminal

```bash
docker run -p 3000:3000 penayo/fullt-gith-client:latest
```

To make sure all would be OK with the installation, please don't change the port numbers.
last, open the browser at [http://localhost:3000](http://localhost:3000)
