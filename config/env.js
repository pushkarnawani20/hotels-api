// add config related data

const config = {
  jwtToken: `mySecreatKey`,
  appName: "INOVATION",
  mongoUser: "Authmember",
  mongoPassword: "9qJNQwC3uW50OCzY",
  port: process.env.PORT || 5000,
  mailUser: "hotelathome123@gmail.com",
  mailPassword: "hotel0012",
};

const mongoDbUri = `mongodb+srv://${config.mongoUser}:${config.mongoPassword}@cluster0-34ime.mongodb.net/${config.appName}?retryWrites=true&w=majority`;

module.exports = { config, mongoDbUri };
