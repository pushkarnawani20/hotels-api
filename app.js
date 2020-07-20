"use strict";
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { config, initMongo } = require("./config");
const userRouter = require("./routes/auth.routes");
const mealRouter = require("./routes/meals.routes");
const restaurantRouter = require("./routes/restaurants.routes");
const hotelRouter = require("./routes/hotels.routes");
const spaRouter = require("./routes/spa.routes");
const chefRouter = require("./routes/chef.routes");
const laundryRouter = require("./routes/laundry.routes");
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
  spaRouter,
  chefRouter,
  laundryRouter
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
