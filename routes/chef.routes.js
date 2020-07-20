const express = require("express");
const { chefController } = require("../controllers");

const router = express.Router();

/**
 * @method - get
 * @param - /spa
 * @description - fetch spa
 */

router.route("/chef").post(chefController.createChef);

router.route("/chef").get(chefController.listChef);

module.exports = router;
