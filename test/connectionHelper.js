const mongoose = require("mongoose");
const cfg = require("../config");

exports.mongoConnection = mongoose.connect(cfg.mongoUrlTest);
mongoose.Promise = Promise;
