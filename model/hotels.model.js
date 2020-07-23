const mongoose = require("mongoose");
const HotelSchema = new mongoose.Schema({
  hotelName: {
    type: String,
  },
  propCode: {
    type: String,
  },
  hotelLocation: {
    type: String,
  },
  hotelDescription: {
    type: String,
  },
  hotelImage: {
    type: String,
  },
  openingHours: {
    type: String,
  },
  restaurants: [{ type: mongoose.Schema.ObjectId, ref: "Restaurant" }],
  spa: [{ type: mongoose.Schema.ObjectId, ref: "Spa" }],
  chefs: [{ type: mongoose.Schema.ObjectId, ref: "Chef" }],
  laundry: [{ type: mongoose.Schema.ObjectId, ref: "Laundry" }],
});

const Hotel = mongoose.model("Hotel", HotelSchema);

module.exports = Hotel;
