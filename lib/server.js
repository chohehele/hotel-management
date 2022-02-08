'use strict';

const express = require('express');
const jwt = require('jsonwebtoken');

const errorHandler = require('./error-handlers/500.js');
const notFound = require('./error-handlers/404.js');
const authRoutes = require('./auth/routes.js');

const { db } = require('./models/index.js');

const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use(authRoutes);
// Catchalls
app.use(notFound);
app.use(errorHandler);


  module.exports = {
    server: app,
    start: db.sync()
    .then(() => {
      app.listen(PORT, () => console.log('server is running on', PORT));
    }).catch(error => {
      console.error('Could not start server', error.message);
    }),
  };