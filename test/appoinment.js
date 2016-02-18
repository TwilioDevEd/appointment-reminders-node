require('./connectionHelper');
var expect = require('chai').expect;
var supertest = require('supertest');
var app = require('../app.js');
var Appointment = require('../models/appointment');
var agent = supertest(app);

describe('appointment', function () {

  var appointment = {};

  beforeEach(function(done) {
    Appointment.remove({}, done);
    appointment = new Appointment({
      name: 'Appointment',
      phoneNumber: '+5555555',
      time: new Date(),
      notification: 15,
      timeZone: 'Africa/Algiers'
    });

  });


  describe('GET /appointments', function () {
      it('list all appointments', function (done) {

        var result = appointment.save();
        result
          .then(function () {
            agent
              .get('/appointments')
              .expect(function (response) {
                expect(response.text).to.contain('Appointment');
                expect(response.text).to.contain('+5555555');
                expect(response.text).to.contain('15');
                expect(response.text).to.contain('Africa/Algiers');
              })
              .expect(200, done);
          });
      });
    });

  describe('GET /appointments/create', function () {
    it('shows create property form', function (done) {
      agent
        .get('/appointments/create')
        .expect(function (response) {
          expect(response.text).to.contain('Create');
        })
        .expect(200, done);
    });
  });

  describe('POST to /appointments', function () {
    it('creates a new appointment', function (done) {
      agent
        .post('/appointments')
        .type('form')
        .send({
          name: 'Appointment',
          phoneNumber: '+5555555',
          time: '02-17-2016 12:00am',
          notification: 15,
          timeZone: 'Africa/Algiers'
        })
        .expect(function(res) {
          Appointment
            .find({})
            .then(function (appointments) {
              expect(appointments.length).to.equal(1);
            });
        })
        .expect(302, done);
    });
  });


  describe('GET /appointments/:id/edit', function () {
  it('shows a single appointment', function (done) {

    var result = appointment.save();
    result
      .then(function () {
        agent
          .get('/appointments/' + appointment.id + "/edit")
          .expect(function (response) {
            expect(response.text).to.contain('Appointment');
            expect(response.text).to.contain('+5555555');
            expect(response.text).to.contain('15');
            expect(response.text).to.contain('Africa/Algiers');
          })
          .expect(200, done);
      });
    });
  });

  describe('POST /appointments/:id/edit', function () {
    it('updates an appointment', function (done) {

      var result = appointment.save();
      result
        .then(function () {
          agent
            .post('/appointments/' + appointment.id + '/edit')
            .type('form')
            .send({
              name: 'Appointment2',
              phoneNumber: '+66666666',
              time: '02-17-2016 12:00am',
              notification: 15,
              timeZone: 'Africa/Algiers'
            })
            .expect(function(response) {
              Appointment
                .findOne()
                .then(function (appointment) {
                  expect(appointment.name).to.contain('Appointment2');
                  expect(appointment.phoneNumber).to.contain('+66666666');
                });
            })
            .expect(302, done);
        });
    });
  });
});
