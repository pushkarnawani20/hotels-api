const { check, validationResult } = require("express-validator");

const validateSignUpUser = [
  check("firstName")
    .trim()
    .not()
    .isEmpty()
    .withMessage("first name can not be empty!")
    .isLength({ min: 3 })
    .withMessage("Minimum 3 characters required!"),
  check("lastName")
    .trim()
    .not()
    .isEmpty()
    .withMessage("last name can not be empty!")
    .isLength({ min: 3 })
    .withMessage("Minimum 3 characters required!"),
  check("phoneNumber")
    .trim()
    .not()
    .isEmpty()
    .withMessage("last name can not be empty!")
    .isLength({ min: 10 })
    .withMessage("Minimum 3 characters required!")
    .isMobilePhone()
    .withMessage("Not a valid mobile no!"),
  check("email")
    .trim()
    .not()
    .isEmpty()
    .withMessage("Invalid email address!")
    .isEmail()
    .withMessage("Invalid email address!")
    .isLength({ min: 5 })
    .withMessage("Minimum 5 characters required!"),
  check("password")
    .trim()
    .not()
    .isEmpty()
    .withMessage("Password can not be empty!")
    .isLength({ min: 5 })
    .withMessage("Minimum 5 characters required!"),
  check("address")
    .trim()
    .not()
    .isEmpty()
    .withMessage("address can not be empty!"),
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
        message: "invalid input feilds",
      });
    }
    next();
  },
];

module.exports = validateSignUpUser;
