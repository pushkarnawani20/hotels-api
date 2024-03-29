const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
  date: {
    type: Date,
    default: Date.now(),
  },
  propCode: {
    type: String,
  },
  serviceName: {
    type: String,
  },
  serviceType: {
    type: String,
  },
  amount: {
    type: String,
  },
  items: [],
  userId: {
    type: String,
  },
  user: {
    shippingAddress: {
      type: String,
    },
    paymentInfo: {
      cardNo: {
        type: String,
      },
      cardType: {
        type: String,
      },
      cardHolderName: {
        type: String,
      },
      validUpTo: {
        type: String,
      },
    },
  },
},{bufferCommands:false});

const orderModel = mongoose.model("Orders", OrderSchema);

module.exports = orderModel;
