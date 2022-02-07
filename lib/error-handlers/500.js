`use strict`;

// for 500 level errors, not the user, or db fault
// server errors

function serverError(err, req, res, next) {
    console.error('Server error.');
    console.log(err);
    res.status(500).send('Server is having an error.');
    next();
}

module.exports = serverError;