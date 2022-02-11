'use strict';

const { roomModel } = require('../models');

async function readRooms(req, res, next){

  let id = req.params.id;
  let rooms;

  if (id){
    rooms = await roomModel.findOne({where: {id:id}});
  } else {
    rooms = await roomModel.findAll();
  }

  let resObject = {
    results: rooms,
  };
  res.status(200).json(resObject);
}

module.exports = readRooms;