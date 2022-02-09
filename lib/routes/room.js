'use strict';

const express = require('express');
const createRoom = require('../middleware/createRoom');
const readRooms = require('../middleware/readRooms');
const updateRoom = require('../middleware/updateRoom');
const removeRoom = require('../middleware/removeRoom');

const router = express.Router();

router.get('/room', readRooms);
router.get('/room/:id', readRooms);
router.post('/room', createRoom);
router.patch('/room/:id', updateRoom);
router.delete('/room/:id', removeRoom);

module.exports = router;