require("dotenv").config();
const mongoose = require("mongoose");
const PORT = process.env.PORT;
const url_connect = process.env.CONNECT_MONGOOSE;
const connect = (app) => {
  mongoose.connect(url_connect).then(() => {
    console.log("Connect Mongoose Success....");
    app.listen(PORT, () => {
      console.log("Server Running....");
    });
  });
};

module.exports = connect;
