// add config related data

const config = {
  jwtToken: `mySecreatKey`,
  appName: "INOVATION",
  mongoUser: "Authmember",
  mongoPassword: "qHKqTKYRdYnpxUyX",
  port: process.env.port || 5000,
};

const mongoDb = `mongodb+srv://${config.mongoUser}:${config.mongoPassword}@cluster0-34ime.mongodb.net/${config.appName}?retryWrites=true&w=majority`;

export { config, mongoDb };
