const express = require("express");
const {
  createMeal,
  listMeal,
} = require("../../controllers/hotels/mealsControler");

const router = express.Router();

/**
 * @method - get
 * @param - /meals
 * @description - fetch meals
 */

router.route("/hotels/meals").get(listMeal);

/**
 * @method - post
 * @param - /meals
 * @description - post meals
 */

router.route("/hotels/meals").post(createMeal);

module.exports = router;
