const router = require('express').Router();
const info = require('../../secret.config');
const pRequest = require('request-promise');

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
        url: `https://api.darksky.net/forecast/${info.darkSkySecret}/${location.lat},${location.lng}?exclude=minutely,flags`,
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
        forecastObj["address"] = address;
        res.json(forecastObj);
      }
    })
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
