// do not modify this file
const mongoose = require("mongoose");
const { mongoDbUri } = require("./env");

const initMongo = async () => {
  try {
    await mongoose.connect(mongoDbUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    mongoose.connection
      .once("open", () => {
        console.log("MongoDB connection established successfully");
      })
      .on("error", (error) => {
        console.error("error", error);
        throw error;
      });
  } catch (e) {
    console.log(e);
    throw e;
  }
};
module.exports = { initMongo };
