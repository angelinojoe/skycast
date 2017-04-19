const Sequelize = require('sequelize');
const db = require('../_db');

var Query = db.define('query', {
  details: {
    type: Sequelize.TEXT
  }
});

module.exports = Query;
