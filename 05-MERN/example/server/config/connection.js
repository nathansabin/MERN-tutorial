const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/stockPort");

module.exports = mongoose.connection;
