const express = require("express");
const { createSpa, listSpa } = require("../../controllers/hotels/spaControler");

const router = express.Router();

/**
 * @method - get
 * @param - /spa
 * @description - fetch spa
 */

router.route("/hotels/spa").post(createSpa);

router.route("/hotels/spa").get(listSpa);


module.exports = router;