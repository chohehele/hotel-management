'use strict';

const express = require('express');
const Guest = require('../models/guest.schema.js');
const router = express.Router();
const { guest } = require('../models/guests.js');

//Add A Guest
router.route('/add').post((req,res)=>{
  const {name, timesVisited, score, meanNickname, leastFFood, checkedIn} = req.body;    
  
  const newGuest = new Guest({
    name,
    timesVisited,
    score,
    meanNickname,
    leastFFood,
    checkedIn
  });

  newGuest.save().then(()=>{
    res.status(200).json('Guest Added');
  }).catch((e)=>{
    console.log(e);
  });
});

// Get All Guests
router.route('/').get((req,res)=>{
  Guest.find().then((guests)=>{
    res.json(guests);
  }).catch((err)=>{
    console.log(err);
  });
});

//Update A Guest
router.route('/update/:id').put(async (req,res) =>{
  let guestId = req.params.id;
  const {name, timesVisited, score, meanNickname, leastFFood, checkedIn} = req.body;

  const updateGuest = {
    name,
    timesVisited,
    score,
    meanNickname,
    leastFFood,
    checkedIn
  };

  Guest.findByIdAndUpdate (guestId, updateGuest).then((guest) =>{
    res.json(guest);

  }).catch((err) => {
    console.log(err);
    res.json(err);
  });
});

//Delete A Guest
router.route('/delete/:id').delete(async (req,res) => {
  let guestId = req.params.id;

  await Guest.findByIdAndDelete(guestId).then(() => {
    res.status(200).send({status: 'Guest Excised!'});

  }).catch((error) => {
    console.log(error.message);
    res.status(500).send({status: 'An Error Occurred During Exorcism!',error:error.message});
  });
});

// Get A Guest
router.route('/get/:id').get(async (req,res) => {
  let guestId = req.params.id;
  Guest.findById(guestId).then((guest) => {
    res.json(guest);

  }).catch((err)=> {
    console.log(err.message);
    res.json(err);
  });
});