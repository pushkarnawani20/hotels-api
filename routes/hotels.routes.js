const express = require("express");
// import { authMiddleWare } from "../../utils/middleware/auth";

const { hotelsController } = require("../controllers");

const router = express.Router();

/**
 * @method - get
 * @endpoint - /api/hotels/
 * @description - fetch all hotels
 */
// router.route("/hotels").get(listHotels)
router.route("/hotels/by/:propCode").get(hotelsController.getHotelsById);
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
router.route("/hotels/addrestaurant").post(hotelsController.addRestaurantInHotel);

router.route("/hotels/addspa").post(hotelsController.addSpaInHotel);

/**
 * @method - get
 * @endpoint - /api/hotels/search
 * @description - search hotels
 */
router.route("/hotels/search").get(hotelsController.searchHotels);

module.exports = router;
