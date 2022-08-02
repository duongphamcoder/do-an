const mongoose = require("mongoose");
const CategoryModel = require("./category");
const SizeModel = require("./size");
const SizeOfProductModel = require("./sizeOfProduct");
const Product = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    price: {
      type: String,
    },
    desc: { type: String },
    category_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
    },
    photoURL: { type: String },
    status: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

class ProductModel {
  init() {
    return mongoose.model("Product", Product);
  }

  async getProductById(_id) {
    try {
      const model = this.init();
      const result = await model.findById(_id);
      return result;
    } catch (error) {
      return {};
    }
  }

  async getProductByName(name) {
    const model = this.init();
    const result = await model.find({ name: { $regex: name }, status: 0 });
    return result;
  }

  async getProductByCategory(category_id) {
    try {
      const model = this.init();
      const result = await model
        .find({ category_id, status: 0 })
        .sort({ createAt: -1 });
      return result;
    } catch (error) {
      return [];
    }
  }

  async addProduct(name, price, desc, category_id, photoURL) {
    const model = this.init();
    const product = new model({ name, price, desc, category_id, photoURL });
    return await product.save().then((res) => {
      return res._id;
    });
  }

  async featuredProducts() {
    const categorys = await CategoryModel.getAllCategory();
    console.log(categorys);
  }

  async updateStatusProduct(product_id, status) {
    try {
      const model = this.init();
      const result = await model
        .updateOne({ _id: product_id }, { status })
        .then((res) => false)
        .catch((err) => true);

      return result;
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = new ProductModel();
