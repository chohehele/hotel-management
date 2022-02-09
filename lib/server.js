'use strict';

const express = require('express');
const jwt = require('jsonwebtoken');

const errorHandler = require('./error-handlers/500.js');
const notFound = require('./error-handlers/404.js');
const authRoutes = require('./routes/login.js');
const guestRoutes = require('./routes/guest');

const { db } = require('./models/index.js');

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use(authRoutes);
app.use(guestRoutes);

// Catchalls
app.use(notFound);
app.use(errorHandler);



// module.exports = {
//   server: app,
//   start: db.sync()
//     .then(() => {
//       app.listen(PORT, () => console.log('Server is running on PORT:', PORT));
//     }).catch(error => {
//       console.error('Could not start server', error.message);
//     }),
// };

module.exports = {
  start:(port) => {
    app.listen(port, () => {
      console.log(`your server is running on ${port}`);
    });
  },
  app,
};