const express = require("express");
const { spaController } = require("../controllers");

const router = express.Router();

/**
 * @method - get
 * @param - /spa
 * @description - fetch spa
 */

router.route("/hotels/spa").post(spaController.createSpa);

router.route("/hotels/spa").get(spaController.listSpa);

module.exports = router;
