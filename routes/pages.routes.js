const express = require("express");

const {
  mealsController,
  chefController,
  spaController,
  laundryController,
  restaurantsController,
  hotelsController,
} = require("../controllers");

const router = express.Router();

/**
 * @method - get/post
 * @param - /meals
 * @description - fetch  and add meals
 */

router
  .route("/meals")
  .get(mealsController.listMeal)
  .post(mealsController.createMeal);

/**
 * @method - get/post
 * @param - /meals
 * @description - fetch and add chef
 */

router
  .route("/chef")
  .get(chefController.listChef)
  .post(chefController.createChef);

/**
 * @method - get/post
 * @param - /spa
 * @description - fetch and add spa
 */

router.route("/spa").get(spaController.listSpa).post(spaController.createSpa);

/**
 * @method - get/post
 * @param - /laundry
 * @description - fetch and add laundry
 */

router
  .route("/laundry")
  .get(laundryController.listLaundry)
  .post(laundryController.addLaundry);

/**
 * @method - get/post
 * @param - /restaurant
 * @description - fetch and add restaurants
 */

router
  .route("/restaurant")
  .get(restaurantsController.listResturents)
  .post(restaurantsController.createResturent);

/**
 * @method - post
 * @param - /restaurant/addmeals
 * @description - add meals in restaurants
 */
router
  .route("/restaurant/addmeals")
  .post(restaurantsController.addMealsInResturent);

/**
 * @method - post
 * @endpoint - /api/hotels
 * @description - add hotels data
 */
router.route("/hotels").post(hotelsController.createHotel);

/**
 * @method - post
 * @endpoint - /api/hotels/addrestaurant
 * @description - add Restaurant in hotels data
 */

router
  .route("/hotels/addrestaurant")
  .post(hotelsController.addRestaurantInHotel);

/**
 * @method - post
 * @endpoint - /api/hotels/addspa
 * @description - add spa in hotels data
 */

router.route("/hotels/addspa").post(hotelsController.addSpaInHotel);

/**
 * @method - post
 * @endpoint - /api/hotels/addchef
 * @description - add chef in hotels data
 */

router.route("/hotels/addchef").post(hotelsController.addChefInHotel);

/**
 * @method - post
 * @endpoint - /api/hotels/addLaundry
 * @description - add chef in hotels data
 */

router.route("/hotels/addLaundry").post(hotelsController.addLaundryInHotel);

module.exports = router;
