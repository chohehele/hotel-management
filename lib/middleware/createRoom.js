'use strict';

const { roomModel } = require('../models');

async function createRoom(req, res){
  
  let { bedSize, dirty, occupied, ready } = req.query;

  const room = await roomModel.create({
    // rmNumber: rmNumber,
    bedSize: bedSize,
    dirty: dirty,
    occupied: occupied,
    ready: ready,
  });
  res.send(room);
}

module.exports = createRoom;