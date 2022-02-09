'use strict';

const { guestModel } = require("../models");

async function handleCreateGuest(req, res){
  
    try {
      const createdGuest = await guestModel.create(req.body)
      res.status(201).send(createdGuest);
    }catch (e){
      res.status(500).send('Server Error, try again');
    }
  
  }

  module.exports = handleCreateGuest;