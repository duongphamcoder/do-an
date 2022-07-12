const mongoose = require("mongoose");

const SizeOfProduct = new mongoose.Schema(
  {
    size_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Sizes",
    },
    product_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Products",
    },
    amount: {
      type: Number,
    },
  },
  { timestamps: true }
);

class SizeOfProductModel {
  init() {
    return mongoose.model("SizeOfProduct", SizeOfProduct);
  }

  async getSizeOfProductByProductId(_id) {
    const model = this.init();
    return await model.find({ product_id: _id });
  }

  async addSizeOfProduct(product_id, size_id, amount) {
    const model = this.init();
    const temp = new model({
      product_id,
      size_id,
      amount,
    });
    /*
      trả về false là thêm thành công
      trả về true là thêm thất bại
    */
    return await temp
      .save()
      .then((req) => false)
      .catch((error) => true);
  }
}

module.exports = new SizeOfProductModel();
