# handmade.backend
Handmade site with keystonejs 4.0
Backend for handmade project. 

## Table of contents

-   [Getting Started](#getting-started)
-   [Elements](#elements)
    -   [MongoDb](#mongodb)
    -   [Mongoose](#mongoose)
    -   [Keystonejs](#keystonejs)
-   [Error with node-sass](#error-with-node-sass)

## Getting started
First install handmade.backend

```sh
git clone https://github.com/evgeniy-logvinov/handmade.backend.git
npm install
```
Second run with pm2 for dev mode

```sh
pm2 start ecosystem.config.js
```

or for prod mode

```sh
pm2 start ecosystem.config.js --production
```

## Elements

### MongoDB
Uses [mongoDB](https://docs.mongodb.com/) to contains data

### Mongoose
[Mongoose](https://mongoosejs.com/) to manage data. 

### Keystonejs
[Keystone js](http://keystonejs.com/) provide Admin UI


## error with node-sass
```sh
npm i -g npm-check-updates
npm-check-updates -u
npm install
```