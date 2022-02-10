'use strict';
const { roomModel } = require('../models');

async function turnOverRoom(req, res){
  let {rmNumber, bedSize, dirty, occupied, ready } = req.query;

  // ready = true;
  
  // if (dirty === 'true'){
  //   ready = false;
  // }
  // ready = !dirty;
  // console.log(dirty);
  // console.log(ready);

  // if (dirty === 'false' && occupied === 'false') {
  //   // console.log('dirty');
  //   ready = true;
  // } else {
  //   ready = false;
  // }

  let id = req.params.id;

  if (id) {
    await roomModel.update({
      rmNumber: rmNumber,
      bedSize: bedSize,
      dirty: true,
      occupied: false,
      ready: false,
    },{
      where: {id: id},
    });
  }else{
    await roomModel.create({
      rmNumber: rmNumber,
      bedSize: bedSize,
      dirty: dirty,
      occupied: occupied,
      ready: ready,
    });
  }

  res.status(200).send(await roomModel.findOne({where: {id: id}}));
}

module.exports = turnOverRoom;