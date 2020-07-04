const express = require("express");
const { authMiddleWare } = require("../../utils/middleware/auth");
const orderController = require("../../controllers/order/orderController");

const router = express.Router();

/**
 * @method - post
 * @endpoint - /api/order/checkout
 * @description - checkout foods
 */
router.route("/checkout").post(authMiddleWare, orderController.checkout);

module.exports = router;
