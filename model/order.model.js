const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
  date: {
    type: Date,
    default: Date.now(),
  },
  name: {
    type: String,
  },
  amount: {
    type: Number,
  },
  items: [],
  user: {},
});

const orderModel = mongoose.model("Orders", OrderSchema);

module.exports = orderModel;
