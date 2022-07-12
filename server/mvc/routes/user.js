const express = require("express");
const route = express.Router();
const AccountController = require("../controllers/accountControllers");
const OtherControllers = require("../controllers/otherControllsers");
const nodemailer = require("nodemailer");

route.post("/sendOTP", (req, res) => {
  const email = req.body.email;
  var transporter = nodemailer.createTransport({
    type: "SMTP",
    host: "smtp.gmail.com",
    secure: true,
    port: 465,
    auth: {
      user: "phamtanduongtk29@gmail.com",
      pass: "fykyuvoruyhpkalt",
    },
  });

  const code = "" + parseInt(Math.random() * 1000000);
  var mailOptions = {
    from: "phamtanduongtk29@gmail.com",
    to: email,
    subject: "VerifyEmail",
    text: `OTP: ${code}`,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log("dsda", error);
      return res.json({
        err: true,
        code: "",
      });
    } else {
      console.log("dsda", "heheh");
      return res.json({
        err: false,
        code,
      });
    }
  });
});
route.post("/create-account", AccountController.createAccount);
route.post("/login", AccountController.login);
route.get("/cart", OtherControllers.getProductInCart);
route.post("/add-to-cart", OtherControllers.addToCart);
route.post("/payment", OtherControllers.payment);
route.get("/payment-history", OtherControllers.getAllPaymentProduct);
module.exports = route;
