'use strict';

const express = require('express');
const jwt = require('jsonwebtoken');

const io = require("socket.io")(3000);


const errorHandler = require('./error-handlers/500.js');
const notFound = require('./error-handlers/404.js');
const authRoutes = require('./routes/login.js');

const signin = require('./auth/signin.js');


const { db } = require('./models/index.js');

const PORT = process.env.PORT || 3000;

const app = express()



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
    // .then(() => {
    //   app.listen(PORT, () => console.log('Server is running on PORT:', PORT));

    //  }).catch(error => {
    //   console.error('Could not start server', error.message);
    // }),
  };


io.on('connect', (socket)=> {
    
    socket.on('login', loginPayload => {

      console.log(loginPayload);
      signin(loginPayload); 



    })

    socket.on('createAccount', createPayload => {

      console.log('Create account requests received.');
      console.log(createPayload);
    })




  })