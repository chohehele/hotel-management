'use strict';
require('dotenv').config();
const { Sequelize, DataTypes } = require('sequelize');


//const DATABASE_URL = process.env.NODE_ENV === 'test' ? 'sqlite:memory:' : process.env.DATABASE_URL;

const DATABASE_URL = 'sqlite:memory:';

const guestSchema = require('./guest.schema');
const roomSchema = require('./room.schema');
const userSchema = require('./userModel.js');


const DATABASE_CONFIG = process.env.NODE_ENV === 'production' ? {
  dialectOptions: {
    ssl: true,
    rejectUnauthorized: false,
  },
} : {};

const sequelize = new Sequelize(DATABASE_URL, DATABASE_CONFIG);

module.exports = {
  db: sequelize,
  userModel: userSchema(sequelize, DataTypes),
  guestModel: guestSchema(sequelize, DataTypes),
  roomModel: roomSchema(sequelize, DataTypes),
};






