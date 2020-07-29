const Mongoose = require("mongoose");

const EventSchema = new Mongoose.Schema({
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
  eventDate: {
    type: Date,
  },
  eventTime: {
    type: String,
  },
  numAdults: {
    type: Number,
  },
  venueAddress: {
    type: String,
  },
  decorationRequired: {
    type: Boolean,
  },
  user: {
    name: {
      type: String,
    },
    phone: {
      type: Number,
    },
    email: {
      type: String,
    },
    comments: {
      type: String,
    },
  },
});

const EventModel = new Mongoose.model("Events", EventSchema);
module.exports = EventModel;
