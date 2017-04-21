const Sequelize = require('sequelize');
const db = require('../_db');

var Query = db.define('query', {
  location: {
    type: Sequelize.TEXT,
    allowNull: false
  }
});

module.exports = Query;
