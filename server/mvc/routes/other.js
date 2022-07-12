const express = require("express");
const route = express.Router();
const OtherControllers = require("../controllers/otherControllsers");
route.get("/", OtherControllers.index);
module.exports = route;
