const express = require("express");
const {
  authController,
  hotelsController,
  orderController
} = require("../controllers");
const { signInValidator, signUpValidator } = require("../utils/validator");
const { authMiddleWare } = require("../utils/middleware/auth");
const router = express.Router();

/**
 * @method - post
 * @endpoint - /signup
 * @description - signup user
 */

router.route("/users/signup").post(signUpValidator, authController.signUp);

/**
 * @method - post
 * @endpoint - /api/users/signin
 * @description - sign in user
 */

router.route("/users/signin").post(signInValidator, authController.signIn);

/**
 * @method - get
 * @endpoint - /api/hotels/search
 * @description - search api for hotels
 */

router.route("/hotels/search").get(hotelsController.searchHotels);

/**
 * @method - get
 * @endpoint - /api/hotels/
 * @description - fetch hotel by id
 */

router.route("/hotels/by/:propCode").get(hotelsController.getHotelsById);

/**
 * @method - post
 * @endpoint - /api/hotels/authCheckout
 * @description - make order
 */

router
  .route("/hotels/authCheckout")
  .post(authMiddleWare, orderController.makeAuthOrder);

/**
 * @method - post
 * @endpoint - /api/hotels/eventBook
 * @description - make event query 
 */

router
.route("/hotels/eventBook")
.post(orderController.withoutAuthServiceRequest);

module.exports = router;
