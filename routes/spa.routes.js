const express = require("express");
const { spaController } = require("../controllers");

const router = express.Router();

/**
 * @method - get
 * @param - /spa
 * @description - fetch spa
 */

router.route("/spa").post(spaController.createSpa);

router.route("/spa").get(spaController.listSpa);

module.exports = router;
