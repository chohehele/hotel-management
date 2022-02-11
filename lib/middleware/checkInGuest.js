'use strict';
const { guestModel } = require('../models');

async function checkInGuest(req, res){
  let {name, score, meanNickname, leastFFood, roomAssigned} = req.query;
  let id = req.params.id;

  if (id) {
    await guestModel.update({
      name: name,
      score: score,
      meanNickname: meanNickname,
      leastFFood: leastFFood,
      checkedIn: true,
      roomAssigned: roomAssigned,
    },{
      where: {id: id},
    });

  } else {
    return 'First time visitor. Please create new guest';
  }

  res.status(200).send(await guestModel.findOne({where: {id: id}}));

}

module.exports = checkInGuest;