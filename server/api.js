'use strict'; // eslint-disable-line semi

const api = module.exports = require('express').Router(); // eslint-disable-line new-cap

api.use('/user', require('./api/user'));
api.use('/location', require('./api/location'));

//handles routes that dont exist with a 404 error
api.use(function (req, res, next) {
  const err = new Error('Not found.');
  err.status = 404;
  next(err);
});

// No routes matched? 404.
api.use((req, res) => res.status(404).end());
