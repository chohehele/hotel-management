'use strict';

const { RoomModel } = require('../models');

async function createRoom(req, res){
  
  let {rmNumber, bedSize, dirty, occupied, ready } = req.query;

  const room = await RoomModel.create({
    rmNumber: rmNumber,
    bedSize: bedSize,
    dirty: dirty,
    occupied: occupied,
    ready: ready,
  });

  res.send(room);
}

module.exports = createRoom;