const express = require("express");
const { authController, hotelsController } = require("../controllers");
const { signInValidator, signUpValidator } = require("../utils/validator");

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

// router.route("/api/users?userId").get(userCtrl.userByID);

module.exports = router;
