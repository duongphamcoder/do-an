const express = require("express");
const route = express.Router();

const AdminControllers = require("../controllers/adminControllers");

route.post("/add-product", AdminControllers.handleAddProduct);
route.post("/add-category", AdminControllers.handleAddCategory);
route.post("/add-size", AdminControllers.handleAddSize);
module.exports = route;
