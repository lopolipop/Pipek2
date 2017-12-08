const config = require("./config");
const mogoose = require("mongoose");

module.exports = function () {
  const db = mongoose.connect(config.mongoUri);
  return db;
}
