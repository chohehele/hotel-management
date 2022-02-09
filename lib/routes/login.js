'use strict';

const express = require('express');
const app = express();
const router = express.Router(); // object defines routing logic
app.use(express.json());

const signup = require('../auth/signup.js');
const signin = require('../auth/signin.js');


router.post('/signup', async (req, res) => {
  try {
    await signup(req, res);
  } catch (e) {
    console.log(e);
  }
    
});

router.post('/signin', async (req, res) => {
  try {
    await signin(req,res);
  } catch (e) {
    console.log(e);
  }
    

});

module.exports = router;

