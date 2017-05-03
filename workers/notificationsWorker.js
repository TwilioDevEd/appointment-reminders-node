'use strict';

const Appointment = require('../models/appointment');

const notificationWorkerFactory = function() {
  return {
    run: function() {
      Appointment.sendNotifications();
    },
  };
};

module.exports = notificationWorkerFactory();
