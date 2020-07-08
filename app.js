"use strict";
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { config, initMongo } = require("./config");
const userRouter = require("./routes/auth/authRoutes");
const mealRouter = require("./routes/hotels/mealsRoutes");
const restaurantRouter = require("./routes/hotels/restaurantsRoutes");
const hotelRouter = require("./routes/hotels/hotelsRoutes");
const spaRouter = require("./routes/hotels/spaRoutes");

// express app instance
const app = express();

// Middleware
app.use(bodyParser.json(), cors());

app.use(
  "/api/v1",
  userRouter,
  mealRouter,
  restaurantRouter,
  hotelRouter,
  spaRouter
);

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
