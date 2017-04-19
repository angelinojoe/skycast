'use strict';

var db = require('./_db');
var Query = require('./models/queries');
var User = require('./models/users');

User.hasMany(Query);

module.exports = db;
