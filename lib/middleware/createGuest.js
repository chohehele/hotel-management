'use strict';

const { GuestModel } = require('../models');

async function createGuest(req, res){
  
  let {name, timesVisited, score, meanNickname, leastFFood, checkedIn } = req.query;

  const guest = await GuestModel.create({
    name: name,
    timesVisited: timesVisited,
    score: score,
    meanNickname: meanNickname,
    leastFFood: leastFFood,
    checkedIn: checkedIn,
  });

  res.send(guest);
}

module.exports = createGuest;