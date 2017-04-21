const router = require('express').Router();
const db = require('../../db');
const User = db.models.user;
const Query = db.models.query;

router.post('/login', (req, res, next) => {
  User.findOne({
    where: {
      email: req.body.email
    }
  })
    .then(user => {
      if (!user) {res.status(401).send('User not found');}
      else if (!user.correctPassword(req.body.password)){ res.status(401).send('Incorrect password');}
      else {
        req.login(user, err => {
          if (err) next(err);
          else res.json(user);
        });
      }
    })
    .catch(next);
});

router.post('/signup', (req, res, next) => {
  User.create(req.body)
    .then(user => {
      req.login(user, err => {
        if (err) next(err);
        else res.json(user);
      });
    })
    .catch(next);
});

router.get('/logout', (req, res, next) => {
  req.logout();
  res.sendStatus(200);
});

router.get('/me', (req, res, next) => {
  res.json(req.user);
});

router.post('/query', (req, res, next) => {
  //each time a user submits a search, post it in the db
  Query.create({
    location: req.body.location
  })
  .then((query) => {
    query.setUser(req.user);
  })
  .then((updatedQuery) => {
    res.json(updatedQuery);
  });
});

router.get('/queries', (req, res, next) => {
  Query.findAll({
    where: {
      user_id: req.user
    }
  })
  .then((queries) => {
    if (!queries){
      const err = new Error('does not exist');
      err.status = 404;
      next(err);
    }
    else {
      res.json(queries);
    }
  });
});

//handles routes that dont exist with a 404 error
router.use(function (req, res, next) {
  const err = new Error('Not found.');
  err.status = 404;
  next(err);
});

module.exports = router;
