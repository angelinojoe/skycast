const express = require('express');
const morgan = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const db = require('../db');
const User = db.models.user;
const session = require('express-session');


//middlewares
app.use(morgan('dev'));
express.static(path.join(__dirname, '../public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//session middleware
app.use(session({
  secret: process.env.SESSION_SECRET || 'a wildly insecure secret',
  resave: false,
  saveUninitialized: false
}));

//initialize passport
const passport = require('passport');

app.use(passport.initialize());
app.use(passport.session());

//serialize/deserialize user
passport.serializeUser((user, done) => {
  try {
    done(null, user.id);
  } catch (err) {
    done(err);
  }
});

passport.deserializeUser((id, done) => {
  User.findById(id)
    .then(user => done(null, user))
    .catch(done);
});

app.use('/api', require('./apiRoutes'));

// Send index.html for anything else.
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

//handle 500 errors
app.use(function (err, req, res, next) {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Internal server error.');
});

//start server
app.listen(3000, function () {
  console.log('Your server, listening on port 3000');
  db.sync({force: true})
    .then(function () {
      console.log('The postgres server is connected');
    });
});
