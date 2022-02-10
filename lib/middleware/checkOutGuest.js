'use strict';
const { guestModel, roomModel } = require('../models');

async function checkOutGuest(req, res){
  let {name, score, meanNickname, leastFFood, checkedIn, roomAssigned} = req.query;
  let id = req.params.id;


  // const oldRoom = req.query.roomAssigned;
  // console.log(oldRoom);

  // await roomModel.update({
  //   dirty: true,
  //   occupied: false,
  //   ready: false,
  // },{
  //   where: {id: oldRoom},
  // });

  if (id) {
    await guestModel.update({
      name: name,
      score: score,
      meanNickname: meanNickname,
      leastFFood: leastFFood,
      checkedIn: false,
      roomAssigned: null,
    },{
      where: {id: id},
    });
  } else {
    return 'Guest is not here';
  }

  res.status(200).send(await guestModel.findOne({where: {id: id}}));
}

module.exports = checkOutGuest;