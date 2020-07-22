"use strict";
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { config, initMongo } = require("./config");
const mainRouter = require("./routes/main.routes");
const pagesRouter = require("./routes/pages.routes");
// express app instance
const app = express();

// Middleware
app.use(bodyParser.json(), cors());

app.use("/api/v1", mainRouter, pagesRouter);

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
