'use strict';

const express = require('express');
// const { GuestModel } = require('../models');
const createGuest = require('../middleware/createGuest');
const readGuests = require('../middleware/readGuests');
const updateGuest = require('../middleware/updateGuest');
const removeGuest = require('../middleware/removeGuest');

const router = express.Router();

router.get('/guest', readGuests);
router.get('/guest/:id', readGuests);
router.post('/guest', createGuest);
router.patch('/guest/:id', updateGuest);
router.delete('/guest/:id', removeGuest);

module.exports = router;