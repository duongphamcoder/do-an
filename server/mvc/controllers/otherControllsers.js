const CategoryModel = require("../models/category");
const ProductModel = require("../models/product");
const CartModel = require("../models/cart");

class OtherControllers {
  // xử lý trả dữ liệu cho Home
  async index(req, res) {
    try {
      const result = await CategoryModel.getAllCategory();
      const promise = result.map((item) => {
        const productModel = ProductModel.init();
        const category_id = item._id;
        return productModel
          .find({ category_id, status: 0 })
          .sort({ createAt: -1 })
          .limit(4);
      });

      const data = await Promise.all([...promise]);
      return res.json({ category: result, data });
    } catch (error) {
      console.log(error);
    }
  }

  async getProductInCart(req, res) {
    const user_id = req.query.id;
    const result = await CartModel.getCart(user_id);
    return res.status(200).json({
      result,
    });
  }

  async addToCart(req, res) {
    try {
      const { user_id, product_id, quantity } = req.body;
      const result = await CartModel.addToCart(user_id, product_id, quantity);
      return res.status(200).json({ result });
    } catch (error) {
      console.log(error);
    }
  }

  async payment(req, res) {
    try {
      const cart_ids = JSON.parse(req.body.cart_ids);
      const result = await CartModel.payment(cart_ids);
      return res.json({
        result,
      });
    } catch (error) {
      console.log(error);
    }
  }

  async getAllPaymentProduct(req, res) {
    try {
      const user_id = req.query.id;
      const result = await CartModel.getCartHaveStatus1ByUserID(user_id);
      return res.json({ result });
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = new OtherControllers();
