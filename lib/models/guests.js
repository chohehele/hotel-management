'use strict';

const mongoose = require ('mongoose');

const Schema = mongoose.Schema;

const guestSchema = new Schema({
  name:{ type: String, required: true  }, 
  timesVisited:{ type: Number, required: true }, 
  score:{ type: Number, required: true },
  meanNickname:{ type: String, required: true },
  leastFFood:{ type: String, required: true }, 
  checkedIn:{ type: String, required: true },
});

const guest = mongoose.model('guest', guestSchema);

module.exports = guest;
