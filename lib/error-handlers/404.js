'use strict';

function notFound(req, res, next) {
    console.log('404 Error: Nothing found at this location.');
    res.status(404).send('404 Error: Nothing found at this location.');
    next();
}

module.exports = notFound;