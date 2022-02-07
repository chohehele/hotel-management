'use strict';

const express = require('express');
const app = express();
const {userModel}= require('../models');
const bcrypt = require('bcrypt');
const router = express.Router(); // object defines routing logic
app.use(express.json());

const signup = require('../auth/signup.js');
const signin = require('../auth/signin.js');


router.post('/signup', async (req, res) => {
    await signup(req, res);
});

router.post('/signin', async (req, res) => {
    await signin(req,res);
});

module.exports = router;

