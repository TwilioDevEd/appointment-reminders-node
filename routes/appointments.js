var express = require('express');
var router = express.Router();
var momentTimeZone = require('moment-timezone');
var moment = require('moment');
var Appointment = require('../models/appointment')


var getTimeZones = function(){
  return momentTimeZone.tz.names();
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

// POST: /
router.post('/', function(req, res, next) {
  var name = req.body.name;
  var phoneNumber = req.body.phoneNumber;
  var notification = req.body.notification;
  var timeZone = req.body.timeZone;
  console.log(req.body.time);
  var time = moment(req.body.time, "MM-DD-YYYY hh:mma");

  var appointment = new Appointment({ name, phoneNumber, notification, timeZone, time });
  appointment.save()
    .then(function (savedAppointment) {
      res.redirect('/');
    });
});

module.exports = router;
