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
  HotelDescription: {
    type: String,
  },
  openingHours: {
    type: String,
  },
  restaurants: [{ type: mongoose.Schema.ObjectId, ref: "Restaurant" }],
  spa: [{ type: mongoose.Schema.ObjectId, ref: "Spa" }],
});

const Hotel = mongoose.model("Hotel", HotelSchema);

module.exports = Hotel;
