'use strict';


const Guest = (sequelize, DataTypes) => sequelize.define('Guest', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  score: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  meanNickame: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  leastFFood: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  checkedIn: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
});

module.exports = Guest;