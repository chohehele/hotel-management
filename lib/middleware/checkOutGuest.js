'use strict';
const { guestModel, roomModel } = require('../models');

async function checkOutGuest(req, res){
  let {name, score, meanNickname, leastFFood, checkedIn, roomAssigned} = req.query;
  let id = req.params.id;


  if (id) {
    await guestModel.update({
      name: name,
      score: score,
      meanNickname: meanNickname,
      leastFFood: leastFFood,
      checkedIn: false,
      roomAssigned: roomAssigned,
    },{
      where: {id: id},
    });
  } else {
    return 'Guest is not here';
  }

  res.status(200).send(await guestModel.findOne({where: {id: id}}));
}

module.exports = checkOutGuest;