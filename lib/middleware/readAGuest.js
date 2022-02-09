'use strict';

const { guestModel } = require("../models");

async function handleGetGuest(req, res) {
 
    let receivedGuest = {}
    if (req.query.guest) {
        receivedGuest.id = req.query.id
    }
    try {
      const guestFromDB = await guestModel.find(receivedGuest );
      if (guestFromDB.length > 0) {
        res.status(200).send(guestFromDB);
        console.log(guestFromDB);
      } else {
        res.status(404).send('no guests found');
        console.log(guestFromDB);
      }
    } catch (e) {
      res.status(500).send('Server Error, try again');
    }
  }

  module.exports = handleGetGuest;