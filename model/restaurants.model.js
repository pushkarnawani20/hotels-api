const mongoose = require("mongoose");

// Restaurants model
const RestaurantSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  type: {
    type: String,
  },
  rating: {
    type: Number,
  },
  image: {
    type: String,
  },
  description: {
    type: String,
  },
  meals: [{ type: mongoose.Schema.ObjectId, ref: "Meal" }],
},{bufferCommands:false});

const Restaurant = mongoose.model("Restaurant", RestaurantSchema);

module.exports = Restaurant;
