'use strict';
const { GuestModel } = require('../models');

async function updateGuest(req, res){
  let {name, timesVisited, score, meanNickname, leastFFood, checkedIn } = req.query;

  let id = req.params.id;

  if (id) {
    await GuestModel.update({
      name: name,
      timesVisited: timesVisited,
      score: score,
      meanNickname: meanNickname,
      leastFFood: leastFFood,
      checkedIn: checkedIn,
    },{
      where: {id: id},
    });
  }else{
    await GuestModel.create({
      name: name,
      timesVisited: timesVisited,
      score: score,
      meanNickname: meanNickname,
      leastFFood: leastFFood,
      checkedIn: checkedIn,
    });
  }

  res.status(200).send(await GuestModel.findOne({where: {id: id}}));
}

module.exports = updateGuest;