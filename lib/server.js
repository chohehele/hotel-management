'use strict';

const express = require('express');
const jwt = require('jsonwebtoken');
const routes = require('./routes/route.js');
const mongoose = require('mongoose');

const app = express();

const PORT = process.env.PORT || 3001;


app.use(async (req, res, next) => {
    if (req.headers["x-access-token"]) {
        const accessToken = req.headers["x-access-token"];
        const { userId, exp } = await jwt.verify(accessToken, process.env.JWT_SECRET);

    },
},

app.use('/', routes); app.listen(PORT, () => {
    console.log('Server is listening on Port:', PORT)
});