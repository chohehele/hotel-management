'use strict';
require('dotenv').config();
const { Sequelize, DataTypes } = require('sequelize');
const DATABASE_URL = process.env.DATABASE_URL || 'sqlite:memory:';

const guestSchema = require('./guest.schema');
const roomSchema = require('./room.schema');



let db = new Sequelize(DATABASE_URL, {
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
});

const GuestModel = guestSchema(db, DataTypes);
const RoomModel = roomSchema(db, DataTypes);

module.exports = {
  db,
  GuestModel,
  RoomModel,
};






