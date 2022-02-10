'use strict';

const express = require('express');
const createRoom = require('../middleware/createRoom');
const readRooms = require('../middleware/readRooms');
const turnOverRoom = require('../middleware/turnOverRoom');
const removeRoom = require('../middleware/removeRoom');
const cleanRoom = require('../middleware/cleanRoom');

const router = express.Router();

router.get('/room', readRooms);
router.get('/room/:id', readRooms);
router.post('/room', createRoom);
router.patch('/room/:id', turnOverRoom);
router.put('/room/:id', cleanRoom);
router.delete('/room/:id', removeRoom);

module.exports = router;