const Hotel = require("../model/hotels.model");
const OrderModel = require("../model/order.model");
const User = require("../model/users.model");
const {
  transporter,
  returnMailBody,
} = require("../utils/middleware/authMailer");

const makeAuthOrder = async (req, res) => {
  const inputObj = req.body;
  const order = new OrderModel({
    ...inputObj,
  });
  try {
    const hotels = await Hotel.findOne({
      propCode: inputObj.propCode,
    });
    if (hotels) {
      const user = await User.findOne({ id: inputObj.user.id });

      const mailBody = returnMailBody({
        userName: user.firstName,
        userEmail: user.email,
        inputObj: inputObj,
        hotelName: hotels.hotelName,
      });
      const info = await transporter.sendMail({
        to: user.email,
        subject: `your ${inputObj.serviceName} order booking successfully`,
        html: mailBody,
      });
      if (info) {
        order
          .save()
          .then((result) => {
            if (result) {
              res.status(200).json({
                data: result,
                message: "order placed successfully",
              });
            } else {
              res.status(400).json({
                data: [],
                message: "something wrong in saving data",
              });
            }
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        res.status(400).json({
          data: [],
          message: "something wrong in mail",
        });
      }
    } else {
      res.status(400).json({
        data: [],
        message: "hotel not exist",
      });
    }
  } catch (error) {
    return res.status(500).json({
      data: null,
      message: "Internal server error !",
      error: error,
    });
  }
};

module.exports = { makeAuthOrder };
