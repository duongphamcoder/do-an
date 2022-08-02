const ProductModel = require("../models/product");
const CategoryModel = require("../models/category");
const SizeOfProductModel = require("../models/sizeOfProduct");
const SizeModel = require("../models/size");
class ProductControllers {
  async index(req, res) {
    const category = req.query.category;
    console.log(category);
    const products = await ProductModel.getProductByCategory(category);
    return res.json({
      products,
    });
  }

  async getListCategory(req, res) {
    const categorys = await CategoryModel.getAllCategory();
    return res.json({
      categorys,
    });
  }

  async details(req, res) {
    const product_id = req.query.id;
    const product = await ProductModel.getProductById(product_id);
    const sizeOfProduct = await SizeOfProductModel.getSizeOfProductByProductId(
      product_id
    );
    const sizesTemp = sizeOfProduct.map((item) => {
      return SizeModel.getSizeById(item.size_id);
    });
    const sizes = await Promise.all(sizesTemp);

    return res.json({
      product,
      sizeOfProduct,
      sizes,
    });
  }

  async search(req, res) {
    try {
      const name = req.query.name;
      const result = await ProductModel.getProductByName(name);
      return res.json({
        result,
      });
    } catch (error) {}
  }

  async updateStatusProduct(req, res) {
    try {
      const { product_id, status } = req.body;
      const result = await ProductModel.updateStatusProduct(product_id, status);
      return res.json({
        err: result,
        message: !result ? "Success..." : "Failed...",
      });
    } catch (error) {
      console.log(error);
    }
  }

  async updateQuantityProduct(req, res) {}
}

module.exports = new ProductControllers();
