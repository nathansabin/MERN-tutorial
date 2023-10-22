const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/mern-tutorial");

module.exports = mongoose.connection;