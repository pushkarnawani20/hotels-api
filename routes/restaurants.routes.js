const express = require("express");

const { restaurantsController } = require("../controllers");


const router = express.Router();

/**
 * @method - get
 * @param - /restaurant
 * @description - fetch restaurants
 */

router.route("/restaurant").get(restaurantsController.listResturents);

/**
 * @method - post
 * @param - /restaurant
 * @description - post restaurants
 */

router.route("/restaurant").post(restaurantsController.createResturent);

/**
 * @method - post
 * @param - /restaurant/addmeals
 * @description - add meals in  restaurants
 */
router
  .route("/restaurant/addmeals")
  .post(restaurantsController.addMealsInResturent);

module.exports = router;
