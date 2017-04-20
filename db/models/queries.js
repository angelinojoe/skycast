const Sequelize = require('sequelize');
const db = require('../_db');

var Query = db.define('query', {
  location: {
    type: Sequelize.TEXT
  }
});

module.exports = Query;
