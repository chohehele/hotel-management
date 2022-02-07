'use strict';

const express = require('express');

const router = express.Router(); // object defines routing logic

router.get('/login', loginHandler);
router.get('login/:id', loginHandler);

async function loginHandler(req, res, next) {
    console.log('loginHandler active');

    let { id } = req.params;
    let login;

    if (id) {
        login = await 
    }

}