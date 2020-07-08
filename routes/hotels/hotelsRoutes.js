const express = require("express");
// import { authMiddleWare } from "../../utils/middleware/auth";
const {
  getHotelsById,
  createHotel,
  addRestaurantInHotel,
  searchHotels,
  addSpaInHotel,
} = require("../../controllers/hotels/hotelsControler");

const router = express.Router();

/**
 * @method - get
 * @endpoint - /api/hotels/
 * @description - fetch all hotels
 */
// router.route("/hotels").get(listHotels)
router.route("/hotels/by/:propCode").get(getHotelsById);
/**
 * @method - post
 * @endpoint - /api/hotels
 * @description - add hotels data
 */
router.route("/hotels").post(createHotel);

/**
 * @method - post
 * @endpoint - /api/hotels/addrestaurant
 * @description - add Restaurant in hotels data
 */
router.route("/hotels/addrestaurant").post(addRestaurantInHotel);

router.route("/hotels/addspa").post(addSpaInHotel);

/**
 * @method - get
 * @endpoint - /api/hotels/search
 * @description - search hotels
 */
router.route("/hotels/search").get(searchHotels);

module.exports = router;
