const userRoute = require("./user");
const otherRoute = require("./other");
const adminRoute = require("./admin");
const productRoute = require("./product");

const routes = (app) => {
  app.use("/user", userRoute);
  app.use("/admin", adminRoute);
  app.use("/product", productRoute);
  app.use("/", otherRoute);
};

module.exports = routes;
