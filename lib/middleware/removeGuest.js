'use strict';

const { GuestModel } = require('../models');

async function removeGuest(req, res){
  let id = req.params.id;

  if (id) {
    await GuestModel.destroy({where: {id: id}});
  }

  res.status(200).send(await GuestModel.findOne({where: {id: id}}))|| 'Guest has been deleted successfully';
}

module.exports = removeGuest;