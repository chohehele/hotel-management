'use strict';

const bcrypt = require('bcrypt');
const { userModel } = require('../models/index.js')

async function signup (req, res) {
  try {
    let { username, password } = req.body;
    console.log('signup function hit');
    console.log('username: '+ username);
    req.body.password = await bcrypt.hash(req.body.password, 10);
    const record = await userModel.create(req.body);
    res.status(200).json(record); 
  } catch (err) {
    console.log(error);
    res.status(403).send('User cannot be created');
  }
}

module.exports = signup;