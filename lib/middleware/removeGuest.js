'use strict';

const { guestModel } = require("../models");



async function handleDeleteGuest(req, res){
    const { id } = req.params;
    
    // console.log(id);
    // res.send('test');
  try {   
    const guest = await guestModel.findOne({ _id: id });
    if (!guest) res.status(400).send("unable to delete guest")
    else {
      await guestModel.findByIdAndDelete(id);
      res.status(204).send('guest deleted');
      console.log(id);
    }
  
  } catch (error) {
    res.status(500).send('unable to delete: server side error');
  }
  }

  module.exports = handleDeleteGuest;