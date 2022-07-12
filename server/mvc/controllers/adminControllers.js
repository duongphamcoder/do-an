const ProductModel = require("../models/product");
const CategoryModel = require("../models/category");
const SizeModel = require("../models/size");
const SizeOfProductModel = require("../models/sizeOfProduct");

class AdminControllers {
  // trang chủ của admin
  async index() {}

  // thêm sản phẩm
  async handleAddProduct(req, res) {
    try {
      const { name, price, desc, category_id, photoURL, size_id, amount } =
        req.body;
      const product_id = await ProductModel.addProduct(
        name,
        price,
        desc,
        category_id,
        photoURL
      );
      const result = await SizeOfProductModel.addSizeOfProduct(
        product_id,
        size_id,
        amount
      );
      return res.json({ result });
    } catch (error) {}
  }
  // thêm danh mục
  async handleAddCategory(req, res) {
    try {
      const request = req.body;
      const name = request.name.trim().toLowerCase();
      const result = await CategoryModel.addCategory(name);
      return res.json({
        error: result,
        message: request ? "Thành công..." : "Thất bại...",
      });
    } catch (error) {
      return res.json({
        error: true,
        message: "Có lỗi trong quá trình xử lý...",
      });
    }
  }

  // thêm size cho sản phẩm
  async handleAddSize(req, res) {
    try {
      const name = req.body.name;
      const result = await SizeModel.addSize(name.trim().toUpperCase());
      return res.json({
        err: result,
        message: !result ? "Add success...." : "Add failed...",
      });
    } catch (error) {
      return res.json({
        err: true,
        message: "There was an error in processing....",
      });
    }
  }
}

module.exports = new AdminControllers();
