const Sequelize = require('sequelize');
const db = require('../db.js');

var User = db.define('user', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

module.exports = User;
