'use strict';

const bcrypt = require('bcrypt');
const base64 = require('base-64');

const { userModel } = require('../models/index.js');

async function signin (req, res) {

  let basicHeaderParts = request.headers.authorization.split(' ');  // ['Basic', 'sdkjdsljd=']
  let encodedString = basicHeaderParts.pop();  // sdkjdsljd=
  let decodedString = base64.decode(encodedString); // "username:password"
  let [username, password] = decodedString.split(':'); // username, password

  try {
    const user = await userModel.findOne({ where: { username: username } });
    const valid = await bcrypt.compare(password, user.password);
    if (valid) {
      response.status(200).json(user);
    }
    else {
      throw new Error('Invalid User')
    }
  } catch (error) { response.status(403).send('Invalid Login'); }
          
        
};

module.exports = signin;