const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
  date: {
    type: Date,
    default: Date.now(),
  },
  serviceName: {
    type: String,
  },
  amount: {
    type: Number,
  },
  items: [],
  user: {
    userID: {
      type: String,
    },
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
});

const orderModel = mongoose.model("Orders", OrderSchema);

module.exports = orderModel;
