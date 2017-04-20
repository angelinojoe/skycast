'use strict';

var db = require('./_db');
var Query = require('./models/queries');
var User = require('./models/users');

Query.belongsTo(User);

module.exports = db;
