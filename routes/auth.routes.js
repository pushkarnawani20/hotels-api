const express = require("express");
const { authController } = require("../controllers");
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

// router.route("/api/users?userId").get(userCtrl.userByID);

module.exports = router;
