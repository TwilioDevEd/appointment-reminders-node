var mongoose = require('mongoose');

var Appointment = new mongoose.Schema({
  name:String,
  phoneNumber: String,
  description: String,
  time : Date,
  timeZone : String,
  createdAt : Date

});

var appointment = mongoose.model('appointment', Appointment);
module.exports = appointment;
