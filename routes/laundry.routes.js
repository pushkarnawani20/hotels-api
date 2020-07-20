const express = require('express')
const {laundryController} = require('../controllers')

const router = express.Router();

/**
 * @method - get
 * @param - /laundry
 * @description - fetch laundry
 */

router.route("/laundry").post(laundryController.addLaundry);

router.route("/laundry").get(laundryController.listLaundry);


module.exports = router;