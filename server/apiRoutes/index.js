'use strict';

const api = module.exports = require('express').Router(); // eslint-disable-line new-cap

api.use('/user', require('./user'));

//handles routes that dont exist with a 404 error
api.use(function (req, res, next) {
  const err = new Error('Not found.');
  err.status = 404;
  next(err);
});
