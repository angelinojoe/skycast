'use strict';

const session = require('express-session');
const passport = require('passport');
const express = require('express');
const bodyParser = require('body-parser');
const {resolve} = require('path');
const finalHandler = require('finalhandler');
const db = require('../db');


const app = express();

app.use(require('volleyball'));

module.exports = app
  // Body parsing middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Authentication middleware

app.use(session({
  secret: 'string',
  resave: false,
  saveUninitialized: false
}));

app.use('/numVisits', function(req, res, next){
  var sess = req.session;
  if (sess.number === undefined) {
    sess.number = 0;
  } else {
    sess.number++;
  }
  res.status(200).send(sess);
});

app.use('/', (req, res, next) => {
  next();
});

app.use(passport.initialize());
app.use(passport.session());

passport.serializeUser((user, done) => {
  done(null, user.id);
  });

passport.deserializeUser((id, done) => {
  done(null, id);
});


// Serve static files from ../public
app.use(express.static(resolve(__dirname, '..', 'public')));

// Serve our api - ./api also requires in ../db, which syncs with our database
app.use('/api', require('./api.js'));

// Send index.html for anything else.
app.get('/*', (_, res) => res.sendFile(resolve(__dirname, '..', 'public', 'index.html')));


app.use((err, req, res, next) => {
  console.error(err);
  finalHandler(req, res)(err);
});

if (module === require.main) {

  const server = app.listen(
    process.env.PORT || 1337,
    () => {
      console.log(`--- Started HTTP Server ---`);
      const { address, port } = server.address();
      const host = address === '::' ? 'localhost' : address;
      const urlSafeHost = host.includes(':') ? `[${host}]` : host;
      console.log(`Listening on http://${urlSafeHost}:${port}`);
      db.sync({force: true})
      .then(function () {
        console.log('The postgres server is connected');
      });
    }
  );
}
