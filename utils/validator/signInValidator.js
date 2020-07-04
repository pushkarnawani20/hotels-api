const { check, validationResult } = require("express-validator");

const validateSignInUser = [
  check("email")
    .trim()
    .normalizeEmail()
    .not()
    .isEmpty()
    .withMessage("Invalid email address!"),
  check("password")
    .trim()
    .not()
    .isEmpty()
    .withMessage("Password can not be empty!"),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        data: errors.array().map((err) => {
          return {
            feild: err.param,
            message: err.msg,
          };
        }),
        message: "invalid crendetial",
      });
    }
    next();
  },
];

module.exports = validateSignInUser;
