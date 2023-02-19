'use strict';

const express = require('express');
const cors = require('cors');

const usersRouter = require('./routes/users');

function createServer() {
  const app = express();

  app.use(cors());
  app.use(express.json());

  app.use('/users', usersRouter);

  return app;
}

module.exports = {
  createServer,
};
