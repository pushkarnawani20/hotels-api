import mongoose, { Schema } from "mongoose";

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
  meals: [{ type: Schema.ObjectId, ref: "Meal" }],
});

const Restaurant = mongoose.model("Restaurant", RestaurantSchema);

export default Restaurant;
