const jwt = require("jsonwebtoken");
const { config } = require("../../config");

const authMiddleWare = (req, res, next) => {
  const token = req.header("token");
  if (!token) return res.status(401).json({ message: "Auth Error" });

  try {
    const decoded = jwt.verify(token, config.jwtToken);
    req.user = decoded.user;
    next();
  } catch (e) {
    res.status(500).send({ message: "Invalid Token" });
  }
};
module.exports = { authMiddleWare };
