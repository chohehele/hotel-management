'use strict';

const { guestModel } = require('../models');

async function readGuests(req, res, next){

  let id = req.params.id;
  let guests;

  if (id){
    guests = await guestModel.findOne({where: {id:id}});
  } else {
    guests = await guestModel.findAll();
  }

  let resObject = {
    // count: guests ? guests.length: 1,
    results: guests,
  };
  res.status(200).json(resObject);
}

module.exports = readGuests;