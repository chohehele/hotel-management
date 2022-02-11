'use strict';

const Room = (sequelize, DataTypes) => sequelize.define('Room', {
  
  bedSize: {
    type: DataTypes.STRING,
  },
  dirty: {
    type: DataTypes.BOOLEAN,
    default: false,
  },
  occupied: {
    type: DataTypes.BOOLEAN,
    default: false,
  },
  ready: {
    type: DataTypes.BOOLEAN,
    default: true,
  },
});

module.exports = Room;