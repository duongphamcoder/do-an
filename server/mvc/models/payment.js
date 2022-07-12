const mongoose = require("mongoose");

const Payment = new mongoose.Schema({
  user_id: {
    type: String,
  },
  products: {
    type: String,
  },
});
