"use strict";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { config, initMongo } from "./config";
import userRouter from "./routes/auth/authRoutes";
import mealRouter from "./routes/hotels/mealsRoutes";
import restaurantRouter from "./routes/hotels/restaurantsRoutes";
import hotelRouter from "./routes/hotels/hotelsRoutes";

// express app instance
const app = express();

// Middleware
app.use(bodyParser.json(), cors());

app.use("/api/v1", userRouter);
app.use("/api/v1", mealRouter);
app.use("/api/v1", restaurantRouter);
app.use("/api/v1", hotelRouter);
// app.use("/api/v1/order/", router.orderRouter);

app.get("/", (req, res) => {
  res.send("hello from me");
});

app.listen(config.port, () => {
  console.log(
    `Server is running on port ${config.port} host url is http://www.localhost:${config.port}/`
  );
  // Initiate Mongo Server
  initMongo();
});
