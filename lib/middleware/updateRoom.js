'use strict';
const { RoomModel } = require('../models');

async function updateRoom(req, res){
  let {rmNumber, bedSize, dirty, occupied, ready } = req.query;

  let id = req.params.id;

  if (id) {
    await RoomModel.update({
      rmNumber: rmNumber,
      bedSize: bedSize,
      dirty: dirty,
      occupied: occupied,
      ready: ready,
    },{
      where: {id: id},
    });
  }else{
    await RoomModel.create({
      rmNumber: rmNumber,
      bedSize: bedSize,
      dirty: dirty,
      occupied: occupied,
      ready: ready,
    });
  }

  res.status(200).send(await RoomModel.findOne({where: {id: id}}));
}

module.exports = updateRoom;