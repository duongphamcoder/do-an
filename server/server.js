const { urlencoded, json } = require("express");
const express = require("express");
const cors = require("cors");
const connect = require("./config");
const routes = require("./mvc/routes");
const app = express();

app.use(urlencoded());
app.use(json());
app.use(cors());

connect(app);
routes(app);
