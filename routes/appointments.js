var express = require('express');
var router = express.Router();
var moment = require('moment-timezone');
var Appointment = require('../models/appointment')


var getTimeZones = function(){
  return moment.tz.names();
}

/* GET users listing. */
router.get('/', function(req, res, next) {
  Appointment.find()
    .then(function (appointments) {
      res.render('appointments/index', { appointments });
    });

  res.send(getTimeZones());
});

module.exports = router;
