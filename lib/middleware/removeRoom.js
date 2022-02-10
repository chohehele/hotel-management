'use strict';

const { roomModel } = require('../models');

async function removeRoom(req, res){
  let id = req.params.id;

  if (id) {
    await roomModel.destroy({where: {id: id}});
  }

  res.status(200).send(await roomModel.findOne({where: {id: id}}))|| 'Room has been deleted successfully';
}

module.exports = removeRoom;