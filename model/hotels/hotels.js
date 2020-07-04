import mongoose, { Schema } from "mongoose";
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
  restaurants: [{ type: Schema.ObjectId, ref: "Restaurant" }],
});

const Hotel = mongoose.model("Hotel", HotelSchema);

export default Hotel;
