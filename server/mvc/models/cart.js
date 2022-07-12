const mongoose = require("mongoose");
const ProductModel = require("./product");
const Cart = new mongoose.Schema(
  {
    user_id: {
      type: String,
    },
    product_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Products",
    },
    quantity: {
      type: Number,
      default: 1,
    },
    total: {
      type: Number,
    },
    status: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

class CartModel {
  init() {
    return mongoose.model("Cart", Cart);
  }

  async getCart(user_id) {
    const model = this.init();
    return await model.find({ user_id, status: 0 });
  }

  async addToCart(user_id, product_id, quantity) {
    try {
      const model = this.init();
      const productModel = ProductModel.init();

      //lấy ra giá của 1 sản phẩm
      const product = await productModel
        .findById(product_id)
        .then((res) => res.price.replaceAll(".", ""))
        .catch((err) => "");
      /*
        + tìm kiếm sản phẩm đó đã có trong giỏ hay chưa
        + nếu tìm thấy thì sẽ trả lại _id của giỏ hàng đó và
          số lượng sản phẩm đã thêm trong giỏ để thực hiện việc cập nhật lại
          số lượng trong giỏ
        + nếu không tìm thấy thì trả về mảng rỗng và tiến hành thêm mới vào giỏ
      */
      const find = await model
        .findOne({ user_id, product_id })
        .then((res) => {
          return {
            _id: res._id,
          };
        })
        .catch((err) => {
          return {};
        });

      /* 
          - tiếp theo:
            + nếu sản phẩm đã có trong giỏ thì ta tiến hành cập nhật lại số lượng và giá
              * trả về status 1 (để nhận biết là bạn cập nhật lại số lượng sản phẩm trong giỏ)
            + nếu sản phẩm chưa có trong giỏ thì tiến hành thêm mới
              * trả về status 0 (để nhận biết bạn thêm mới mốt sản phẩm vào giỏ)
      */
      if (Object.keys(find).length) {
        const { _id } = find;
        const newAmount = +quantity;
        const total = newAmount * +product;
        const result = await model.updateOne(
          { _id },
          { quantity: newAmount, total }
        );
        return 1;
      }

      const total = quantity * +product;
      const cart = new model({
        user_id,
        product_id,
        quantity,
        total,
      });
      await cart.save();
      return 0;
    } catch (error) {
      console.log(error);
    }
  }

  async payment(product_ids) {
    try {
      const model = this.init();
      const products = product_ids.map((item) => {
        return model.updateOne({ _id: item }, { status: 1 });
      });
      const result = await Promise.all(products)
        .then((res) => false)
        .catch((err) => true);
      return result;
    } catch (error) {
      console.log(error);
    }
  }

  async getCartHaveStatus1ByUserID(user_id) {
    const model = this.init();
    const result = await model.find({ user_id, status: 1 });
    return result;
  }
}

module.exports = new CartModel();
