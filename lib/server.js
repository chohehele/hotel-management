'use strict';

const express = require('express');

const errorHandler = require('./error-handlers/500.js');
const notFound = require('./error-handlers/404.js');
const authRoutes = require('./routes/login.js');
const guestRoutes = require('./routes/guest');
const roomRoutes = require('./routes/room');


const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use(authRoutes);
app.use(guestRoutes);
app.use(roomRoutes);

// Catchalls
app.use(notFound);
app.use(errorHandler);



module.exports = {
  start:(port) => {
    app.listen(port, () => {
      console.log(`your server is running on ${port}`);
    });
  },
  app,
};