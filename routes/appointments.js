var express = require('express');
var router = express.Router();
var moment = require('moment-timezone');


var getTimeZones = function(){
  return moment.tz.names();
}

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(getTimeZones());
});

module.exports = router;
