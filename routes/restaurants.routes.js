const express = require("express");

const { restaurantsController } = require("../controllers");


const router = express.Router();

/**
 * @method - get
 * @param - /restaurant
 * @description - fetch restaurants
 */

router.route("/hotels/restaurant").get(restaurantsController.listResturents);

/**
 * @method - post
 * @param - /restaurant
 * @description - post restaurants
 */

router.route("/hotels/restaurant").post(restaurantsController.createResturent);

/**
 * @method - post
 * @param - /restaurant/addmeals
 * @description - add meals in  restaurants
 */
router
  .route("/hotels/restaurant/addmeals")
  .post(restaurantsController.addMealsInResturent);

module.exports = router;
