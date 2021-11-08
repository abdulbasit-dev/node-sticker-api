
<p align="center"><a href="https://nodejs.org/en/" target="_blank"><img src="https://nodejs.org/static/images/logos/nodejs-new-pantone-white.svg" width="300"></a></p>



# Sticker app
a simple crud about sicker


## Installation


- clone project

```bash
  git clone https://github.com/abdulbasit-dev/node-sticker-api.git
  cd node-sticker-api
```
- install dependencies

```bash
  npm install
```
- create .env file and get contnet from .env.example

```bash
  touch .env
```
- set up database credentials inside knexFile.js

- run migartion and seed

```bash
  npx knex migrate:latest 
``` 

```bash
  npx knex seed:run 
``` 

- run server.js

```bash
  nodemon run dev
```

- you are good to go 😊 happy coding
