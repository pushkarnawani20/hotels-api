// do not modify this file
import mongoose from "mongoose";
import { mongoDb as mongoDbUri } from "./env";

const initMongo = async () => {
  try {
    await mongoose.connect(mongoDbUri, {
      useNewUrlParser: true,
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
export { initMongo };
