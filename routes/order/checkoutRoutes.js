import express from "express";
import { authMiddleWare } from "../../utils/middleware/auth";
import orderController from "../../controllers/order/orderController";

const router = express.Router();

/**
 * @method - post
 * @endpoint - /api/order/checkout
 * @description - checkout foods
 */
router.route("/checkout").post(authMiddleWare, orderController.checkout);

export default router;
