'use strict';

const { guestModel } = require('../models');

async function removeGuest(req, res){
  let id = req.params.id;

  if (id) {
    await guestModel.destroy({where: {id: id}});
  }

  res.status(200).send(await guestModel.findOne({where: {id: id}}))|| 'Guest has been deleted successfully';
}

module.exports = removeGuest;