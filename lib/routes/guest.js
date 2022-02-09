'use strict';


const express = require('express');
const { GuestModel } = require('../models');
const createGuest = require('../middleware/createGuest');

const router = express.Router();

router.get('/guest', readGuests);
router.get('/guest/:id', readAGuest);
router.post('/guest', createGuest);
router.patch('/guest/:id', updateGuest);
router.delete('/guest/:id', removeGuest);
