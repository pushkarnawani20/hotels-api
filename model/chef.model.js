const mongoose = require("mongoose");

// Chef model
const ChefSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  rating: {
    type: Number,
  },
  cookingStyle: [],
  signatureDishes: [],
  type: {
    type: String,
  },
  experience: {
    type: String,
  },
  image: {
    type: String,
  },
},{bufferCommands:false});

const Chef = mongoose.model("Chef", ChefSchema);

module.exports = Chef;
