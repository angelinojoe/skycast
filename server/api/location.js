const router = require('express').Router();
const info = require('../../secret.config');
const pRequest = require('request-promise');
const Promise = require('bluebird');

router.get('/:address', (req, res, next) => {
  pRequest({
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=${req.params.address}&key=${info.googleAPIKey}`,
    method: 'GET',
    json: true
  })
  .then(locationObj => {
    if (!locationObj){
      const err = new Error('does not exist');
      err.status = 404;
      next(err);
    } else {
      //use location from google API to then get forecast
      const address = locationObj.results[0].formatted_address;
      const location = locationObj.results[0].geometry.location;
      pRequest({
        url: `https://api.darksky.net/forecast/${info.darkSkySecret}/${location.lat},${location.lng}?exclude=minutely,hourly,flags`,
        method: 'GET',
        json: true
      })
      .then(forecastObj => {
        if (!forecastObj){
        const err = new Error('does not exist');
        err.status = 404;
        next(err);
      } else {
        //attach address to forecast obj
        forecastObj.address = address;
        //use time from forecastObj, get time for each day of last weekArray
        //use bluebird promise.all to call API for each day of last week
        const lastWeek = (forecastObj.currently.time - 604800);
        let weekArray = [lastWeek];
        for (var i = 0;i < 6;i++){
          weekArray.push(weekArray[i] + 86400);
        }
        Promise.map(weekArray, function(day) {
        // Promise.map awaits for returned promises
          return pRequest({
            url: `https://api.darksky.net/forecast/${info.darkSkySecret}/${location.lat},${location.lng},${day}?exclude=currently,minutely,hourly,flags`,
            method: 'GET',
            json: true
          });
        }).then((weekObj) => {
          if (!weekObj){
            const err = new Error('does not exist');
            err.status = 404;
            next(err);
          }
          else {
            forecastObj.past = weekObj;
            res.json(forecastObj);
          }
        })
      .catch(next);
    }})
    .catch(next);
    }
  })
  .catch(next);
});


//handles routes that dont exist with a 404 error
router.use(function (req, res, next) {
  const err = new Error('Not found.');
  err.status = 404;
  next(err);
});

module.exports = router;
