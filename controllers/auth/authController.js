import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { config } from "../../config";

import User from "../../model/users/usersModel";

/**
 * @method - POST
 * @description - User SignUp
 */
const signUp = async (req, res) => {
  let userInput = req.body;

  try {
    let user = await User.findOne({ email: userInput.email });
    if (user) {
      return res.status(400).json({
        data: null,
        msg: "User Already Exists",
      });
    }
    user = new User({ ...userInput });

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(userInput.password, salt);

    await user.save();

    const payload = { user: { id: user.id } };
    jwt.sign(payload, config.jwtToken, { expiresIn: 10000 }, (err, token) => {
      if (err) throw err;
      res.status(200).json({
        data: {
          fullName: userInput.firstName + userInput.lastName,
          email: userInput.email,
          token,
          message: "User sucessfully register",
        },
      });
    });
  } catch (err) {
    return res.status(500).json({
      data: null,
      message: "Error in Saving !",
    });
  }
};

/**
 * @method - POST
 * @description - User Signin
 */

const signIn = async (req, res) => {
  const { email, password } = req.body;
  try {
    let user = await User.findOne({
      email,
    });
    if (!user)
      return res.status(400).json({
        data: null,
        message: "User Not Exist",
      });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(400).json({
        data: null,
        message: "Incorrect Password !",
      });

    const payload = { user: { id: user.id } };

    jwt.sign(payload, config.jwtToken, { expiresIn: 3600 }, (err, token) => {
      if (err) throw err;
      res.status(200).json({
        fullName: user.firstName + user.lastName,
        email,
        token,
        message: "User sucessfully login",
      });
    });
  } catch (e) {
    res.status(500).json({
      data: null,
      message: "Server Error",
    });
  }
};

export default { signIn, signUp };
