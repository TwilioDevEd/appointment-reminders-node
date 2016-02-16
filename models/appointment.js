var mongoose = require('mongoose');

var Appointment = new mongoose.Schema({
  name:String,
  phoneNumber: String,
  notification : Number,
  timeZone : String,
  time : Date
});

var appointment = mongoose.model('appointment', Appointment);
module.exports = appointment;
