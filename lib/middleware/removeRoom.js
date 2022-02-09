'use strict';

const { RoomModel } = require('../models');

async function removeRoom(req, res){
  let id = req.params.id;

  if (id) {
    await RoomModel.destroy({where: {id: id}});
  }

  res.status(200).send(await RoomModel.findOne({where: {id: id}}))|| 'Room has been deleted successfully';
}

module.exports = removeRoom;