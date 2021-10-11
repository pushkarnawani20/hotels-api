const mongoose = require("mongoose");

// spa model
const SpaSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  price: {
    type: Number,
  },
  rating: {
    type: Number,
  },
  bestsellers: {
    type: Boolean,
  },
  spaCategory: {
    type: String,
  },
  intensity: {
    type: String,
  },
  totalTime: {
    type: String,
  },
  benefits: [],
  includes: [],
  image: {
    type: String,
  },
},{bufferCommands:false});

const Spa = mongoose.model("Spa", SpaSchema);

module.exports = Spa;
