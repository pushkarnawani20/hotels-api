const authController = require("./auth.controller");
const hotelsController = require("./hotels.controler");
const mealsController = require("./meals.controler");
const restaurantsController = require("./restaurants.controler");
const spaController = require("./spa.controler");
const chefController = require("./chef.controller");
const laundryController = require("./laundry.controller");
const orderController = require("./order.controllers");

module.exports = {
  authController,
  hotelsController,
  mealsController,
  restaurantsController,
  spaController,
  chefController,
  laundryController,
  orderController
};
