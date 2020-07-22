const Mongoose = require("mongoose");

const laundrySchema = new Mongoose.Schema({
  name: {
    type: String,
  },
  itemName: {
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
  serviceType: {
    type: String,
  },
  image: {
    type: String,
  },
  perkg: {
    type: Boolean,
  },
});

const Laundry = Mongoose.model("Laundry", laundrySchema);

module.exports = Laundry;
