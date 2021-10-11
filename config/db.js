// do not modify this file
const mongoose = require("mongoose");
const { mongoDbUri } = require("./env");

const initMongo = async () => {
  try {
    await mongoose.connect(mongoDbUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    
  } catch (e) {
    console.log(e);
    throw e;
  }
};
module.exports = { initMongo };
