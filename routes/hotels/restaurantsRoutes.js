import express from "express";
import {
  createResturent,
  addMealsInResturent,
  listResturents,
} from "../../controllers/hotels/restaurantsControler";

const router = express.Router();

/**
 * @method - get
 * @param - /restaurant
 * @description - fetch restaurants
 */

router.route("/hotels/restaurant").get(listResturents);

/**
 * @method - post
 * @param - /restaurant
 * @description - post restaurants
 */

router.route("/hotels/restaurant").post(createResturent);

/**
 * @method - post
 * @param - /restaurant/addmeals
 * @description - add meals in  restaurants
 */
router.route("/hotels/restaurant/addmeals").post(addMealsInResturent);

export default router;
