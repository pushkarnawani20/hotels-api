import express from "express";
// import { authMiddleWare } from "../../utils/middleware/auth";
import {
  listHotels,
  createHotel,
  addRestaurantInHotel,
  searchHotels,
} from "../../controllers/hotels/hotelsControler";

const router = express.Router();

/**
 * @method - get
 * @endpoint - /api/hotels/
 * @description - fetch all hotels
 */
router.route("/hotels").get(listHotels);

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

/**
 * @method - get
 * @endpoint - /api/hotels/search
 * @description - search hotels
 */
router.route("/hotels/search").get(searchHotels);

export default router;
