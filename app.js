"use strict";
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { config, initMongo } = require("./config");
const userRouter = require("./routes/auth/authRoutes");
const mealRouter = require("./routes/hotels/mealsRoutes");
const restaurantRouter = require("./routes/hotels/restaurantsRoutes");
const hotelRouter = require("./routes/hotels/hotelsRoutes");

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
