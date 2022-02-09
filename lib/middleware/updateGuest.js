'use strict';
const { guestModel } = require('../models');

async function updateGuest(req, res){
  let {name, timesVisited, score, meanNickname, leastFFood, checkedIn } = req.query;

  let id = req.params.id;

  if (id) {
    await guestModel.update({
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
    await guestModel.create({
      name: name,
      timesVisited: timesVisited,
      score: score,
      meanNickname: meanNickname,
      leastFFood: leastFFood,
      checkedIn: checkedIn,
    });
  }

  res.status(200).send(await guestModel.findOne({where: {id: id}}));
}

module.exports = updateGuest;