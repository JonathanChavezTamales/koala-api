const mongoose = require("mongoose");

const causaSchema = new mongoose.Schema({
  title: String,
  description: String,
  detail: String,
  date: Date,
  participants: Number,
  photo: String
});

const Causa = mongoose.model("Causa", causaSchema);

module.exports = Causa;
