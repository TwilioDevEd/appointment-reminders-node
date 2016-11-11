const mongoose = require("mongoose");
const cfg = require("../config");

if (!cfg.mongoUrlTest) {
  throw new Error("MONGO_URL_TEST env variable not set.");
}

exports.mongoConnection = mongoose.connect(cfg.mongoUrlTest);
mongoose.Promise = Promise;
