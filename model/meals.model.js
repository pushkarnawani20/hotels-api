const mongoose = require("mongoose");

// meals model
const MealSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  price: {
    type: Number,
  },
  delivery: {
    type: Boolean,
  },
  rating: {
    type: Number,
  },
  bestsellers: {
    type: Boolean,
  },
  foodType: {
    type: String,
  },
  foodCategory: {
    type: String,
  },
  image: {
    type: String,
  },
},{bufferCommands:false});

const Meal = mongoose.model("Meal", MealSchema);

module.exports = Meal;
