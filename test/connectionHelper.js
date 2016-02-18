var mongoose = require('mongoose');
var cfg = require('../config');

exports.mongoConnection = mongoose.connect(cfg.mongoUrlTest);
mongoose.Promise = require('bluebird');
