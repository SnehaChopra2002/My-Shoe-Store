const mongoose = require("mongoose");

const connectDB = (url) => {
  mongoose.connect(url);
  console.log("connecting to database");
};

module.exports = connectDB;
