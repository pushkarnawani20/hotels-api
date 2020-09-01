const Hotel = require("../model/hotels.model");
const OrderModel = require("../model/order.model");
const User = require("../model/users.model");
const EventsModel = require("../model/events.model");
const {
  transporter,
  returnMailBody,
  returnRequestMailBody,
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
      const user = await User.findOne({ _id: inputObj.user.id });
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
const withoutAuthServiceRequest = async (req, res) => {
  const input = req.body;
  try {
    const hotelData = await Hotel.findOne({
      propCode: input.propCode,
    });

    if (hotelData) {
      const mailBody = returnRequestMailBody({
        userName: input.user.name,
        userEmail: input.user.email,
        inputObj: input,
        hotelName: hotelData.hotelName,
      });
      const info = await transporter.sendMail({
        to: input.user.email,
        subject: `We have received your request for ${input.serviceName} service.`,
        html: mailBody,
      });
      const bookQuery = new EventsModel({ ...input });
      if (info) {
        await bookQuery.save();
        res.status(200).json({
          data: bookQuery,
          msg: "Event query submitted successfully",
        });
      }
    } else {
      res.status(200).json({
        data: null,
        msg: "Hotel does not exist",
      });
    }
  } catch (err) {
    return res.status(500).json({
      data: null,
      message: "Internal server error !" + err,
    });
  }
};

module.exports = { makeAuthOrder, withoutAuthServiceRequest };
