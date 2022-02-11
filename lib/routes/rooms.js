'use strict';

const router = require('express').Router();
let Room = require('../models/rooms');

//Add room

router.route('/add').post((req,res)=>{

  const {roomNo, type, buildingNo, floorNum} = req.body;

    
  const newRoom = new Room({

    roomNo,
    type,
    buildingNo,
    floorNum,


  });

  newRoom.save().then(()=>{
    res.status(200).json('added');
  }).catch((e)=>{
    console.log(e);
  });

});

// Get all  room

router.route('/').get((req,res)=>{
  Room.find().then((rooms)=>{

    res.json(rooms);

  }).catch((err)=>{
    console.log(err);
  });
});

//update room

router.route('/update/:id').put(async (req,res) =>{
  let roomId = req.params.id;
  const {roomNo, type, buildingNo, floorNum} = req.body;

  const updateRoom = {
    roomNo,
    type,
    buildingNo,
    floorNum,

  };

  Room.findByIdAndUpdate (roomId, updateRoom).then((room) =>{
    res.json(room);

  }).catch((err) => {
    console.log(err);
    res.json(err);
    
    

  });
});

//delete room

router.route('/delete/:id').delete(async (req,res) => {
  let roomId = req.params.id;

  await Room.findByIdAndDelete(roomId).then(() => {
    res.status(200).send({status: 'room deleted'});

  }).catch((error) => {
    console.log(error.message);
    res.status(500).send({status: 'Error with delete user',error:error.message});


  });

});

// get a room 

router.route('/get/:id').get(async (req,res) => {
  let roomId = req.params.id;
  Room.findById(roomId).then((room) => {
    res.json(room);

  }).catch((err)=> {
    console.log(err.message);
    res.json(err);
  });
});


module.exports = router;