'use strict';
require('dotenv').config();

const { db } = require('./lib/models');
const server = require('./lib/server.js');
const port = process.env.PORT || 3000;

db.sync().then(() => {
  server.start(port);
});