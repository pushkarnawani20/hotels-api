const nodeMailer = require("nodemailer");
const { config } = require("../../config");
const table = require("../transformer/tables");

const transporter = nodeMailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: config.mailUser,
    pass: config.mailPassword,
  },
});

const returnMailBody = (mailData) => {
  const { userName, inputObj, hotelName } = mailData;
  const mailBody = `
  <div style="color: #343434; font-size:16px; font-family: Calibri, sans-serif;">
    <p style="font-size:20px"><b>Hello ${userName}</p>
    <p style="font-size:14px;">Thank you for choosing our <b>${
      inputObj.serviceName
    } service</b>
    Our continued commitment lies in the complete satisfaction of each and every product we sell.<br>
    <b>Your Order details are:</b>
    ${table.htmlTable(inputObj.items)}
    <p style="font-size:14px;">Your total amount: <b>${inputObj.amount}</b><br>
    Our success lies in our prompt, professional and personal attention we strive to give. Should you have any suggestions that would improve our business, please feel free to contact us.<br>
    <br>
    <br>
    Sincerely<br>
    <b>${hotelName}</b>
    </p>
    </div>
  `;
  return mailBody;
};

const returnRequestMailBody = (mailData) => {
  const { userName, inputObj, hotelName } = mailData;
  const mailBody = `
  <div style="color: #343434; font-size:16px; font-family: Calibri, sans-serif;">
  <p style="font-size:18px"><b>Hello ${userName}</p>
  <p style="font-size:14px;">Thank you for your request to book our <b>${
    inputObj.serviceName
  } service.</b>
  <br>
  You have requested the event to be arranged on ${inputObj.eventDate}.
  <br>
  <br>
  Our team will reach out to you within <b>48 hours</b> to discuss your event further!
  <br>
  <br>
  <br>
  Due to Covid-19 pandemic situation, we are continuing to keep our Hotels closed for safety but striving to provide our exclusive services to you at your doorstep.<br>
  Our continued commitment lies in the impeccable delivery of each and every service we offer with customer satisfaction as our top priority.<br>
  <br>
  <br>
  <br>
  Sincerely<br>
  <b>${hotelName}</b>
  </p>
  </div>
  `;
  return mailBody;
};

module.exports = { transporter, returnMailBody, returnRequestMailBody };
