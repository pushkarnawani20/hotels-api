import express from "express";
import authController from "../../controllers/auth/authController";
import { signInValidator, signUpValidator } from "../../utils/validator";

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

export default router;
