const express = require("express");
const route = express.Router();
const ProductControllers = require("../controllers/productControllers");

route.get("/list-product", ProductControllers.index);
route.get("/category", ProductControllers.getListCategory);
route.get("/details", ProductControllers.details);
route.get("/search", ProductControllers.search);

module.exports = route;
