'use strict';

const express = require('express');
const createGuest = require('../middleware/createGuest');
const readGuests = require('../middleware/readGuests');
const checkOutGuest = require('../middleware/checkOutGuest');
const removeGuest = require('../middleware/removeGuest');
const checkInGuest = require('../middleware/checkInGuest');

const router = express.Router();

router.get('/guest', readGuests);
router.get('/guest/:id', readGuests);
router.post('/guest', createGuest);
router.patch('/guest/:id', checkOutGuest);
router.delete('/guest/:id', removeGuest);
router.put('/guest/:id', checkInGuest);


module.exports = router;