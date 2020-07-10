const mongoose, { Schema } = require( "mongoose");

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
  items: [
    {
      type: Schema.ObjectId,
      ref: "Foods",
    },
  ],
  user: {
    type: Schema.ObjectId,
    ref: "User",
  },
});

const orderModel = mongoose.model("Orders", OrderSchema);

module.exports = orderModel;
