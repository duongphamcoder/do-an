const express = require("express");
const route = express.Router();

const AdminControllers = require("../controllers/adminControllers");
const ProductContrpllers = require("../controllers/productControllers");

route.post("/add-product", AdminControllers.handleAddProduct);
route.post("/add-category", AdminControllers.handleAddCategory);
route.post("/add-size", AdminControllers.handleAddSize);
route.post("/delete-product", ProductContrpllers.updateStatusProduct);
module.exports = route;
