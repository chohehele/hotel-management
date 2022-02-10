'use strict';

const Room = (sequelize, DataTypes) => sequelize.define('Room', {
  // rmNumber: {
  //   type: DataTypes.INTEGER,
  //   // validate: { min: 1, max: 1000},
  // },
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