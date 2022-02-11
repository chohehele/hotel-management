'use strict';
const { roomModel } = require('../models');

async function cleanRoom(req, res){
  let {rmNumber, bedSize, dirty, occupied, ready } = req.query;


  let id = req.params.id;

  if (id) {
    await roomModel.update({
      rmNumber: rmNumber,
      bedSize: bedSize,
      dirty: false,
      occupied: false,
      ready: true,
    },{
      where: {id: id},
    });
  }else{
    await roomModel.create({
      rmNumber: rmNumber,
      bedSize: bedSize,
      dirty: dirty,
      occupied: occupied,
      ready: ready,
    });
  }

  res.status(200).send(await roomModel.findOne({where: {id: id}}));
}

module.exports = cleanRoom;