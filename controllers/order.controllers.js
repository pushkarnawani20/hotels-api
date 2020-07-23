const nodeMailer = require("nodemailer");
const Hotel = require("../model/hotels.model");
const OrderModel = require("../model/order.model");
const User = require("../model/users.model");
var table = require("../utils/transformer/mailTable");

const transporter = nodeMailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "hotelathome123@gmail.com",
    pass: "hotel0012",
  },
});

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

      const mailBody = `
          Dear ${user.firstName},

          Thank you for choosing ${
            inputObj.serviceName
          }. Our continued commitment lies in the
          complete satisfaction of each and every product we sell.

          Your Order details are:
          ${table.htmlTable(inputObj.items)}

          total amount is : ${inputObj.amount}

          Our success lies in our prompt, professional and personal attention we strive to give.
          Should you have any suggestions that would improve our business, please feel free to contact us.

          Sincerely
          ${hotels.hotelName}
        `;
      const mailOptions = {
        to: user.email,
        subject: `your ${inputObj.serviceName} order booking successfully`,
        body: mailBody,
      };
      console.log(mailOptions);
      transporter.sendMail(mailOptions, async (error, info) => {
        if (error) {
          return res.status(400).json({
            data: error,
            msg: info,
          });
        } else {
          await order.save();
          return res.status(200).json({
            data: order,
            result: dataResult,
            message: "User sucessfully login",
          });
        }
      });
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
