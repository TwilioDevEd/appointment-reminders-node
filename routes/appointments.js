var express = require('express');
var router = express.Router();
var moment = require('moment-timezone');
var Appointment = require('../models/appointment')


var getTimeZones = function(){
  return moment.tz.names();
}

// GET: /
router.get('/', function(req, res, next) {
  Appointment.find()
    .then(function (appointments) {
      res.render('appointments/index', { appointments });
    });
});

// GET: /create
router.get('/create', function(req, res, next) {
  res.render('appointments/create', { timeZones: getTimeZones() });
});

module.exports = router;
