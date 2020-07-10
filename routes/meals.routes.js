const express = require("express");
const { mealsController } = require("../controllers");

const router = express.Router();

/**
 * @method - get
 * @param - /meals
 * @description - fetch meals
 */

router.route("/hotels/meals").get(mealsController.listMeal);

/**
 * @method - post
 * @param - /meals
 * @description - post meals
 */

router.route("/hotels/meals").post(mealsController.createMeal);

module.exports = router;
