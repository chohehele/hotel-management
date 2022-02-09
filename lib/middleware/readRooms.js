'use strict';

const { RoomModel } = require('../models');

async function readRooms(req, res, next){

  let id = req.params.id;
  let rooms;

  if (id){
    rooms = await RoomModel.findOne({where: {id:id}});
  } else {
    rooms = await RoomModel.findAll();
  }

  let resObject = {
    // count: rooms ? rooms.length: 1,
    results: rooms,
  };
  res.status(200).json(resObject);
}

module.exports = readRooms;