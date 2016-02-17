var Appointment = require('../models/appointment')

var notificationWorkerFactory =  function(){
  return {
    run: function(){
      Appointment.sendNotifications();
    }
  };
};

module.exports = notificationWorkerFactory();
