'use strict';

const { guestModel, roomModel } = require('../models');

async function createGuest(req, res){
  

  async function createGuestRoom(){
  
    let bedSize = 'too small';
    let dirty = false;
    let occupied = true;
    let ready = false;
  
    const room = await roomModel.create({
      bedSize: bedSize,
      dirty: dirty,
      occupied: occupied,
      ready: ready,
    });
    return(room.id);
  }



  let room = await createGuestRoom();
  let {name, score, meanNickname, leastFFood, checkedIn, roomAssigned } = req.query;

  roomAssigned = room;

  const guest = await guestModel.create({
    name: name,
    score: score,
    meanNickname: meanNickname,
    leastFFood: leastFFood,
    checkedIn: checkedIn,
    roomAssigned: roomAssigned,
  });

  res.send(guest);
}

module.exports = createGuest;