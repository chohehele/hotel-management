'use strict';

const { guestModel } = require("../models");

async function handlePutGuest(req, res){

    const { id } = req.params;
    console.log(req.body);
    try {
      const addedGuest = await guestModel.findByIdAndUpdate(id, req.body, { new: true, overwrite: true });
      res.status(200).send(addedGuest);
    }catch (e){
      res.status(500).send('Server Error, try again');
    }
  
  }

  module.exports = handlePutGuest;