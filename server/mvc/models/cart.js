const mongoose = require("mongoose");
const ProductModel = require("./product");
const SizeOfProductModel = require("./sizeOfProduct");
const SizeModel = require("./size");
const Cart = new mongoose.Schema(
  {
    user_id: {
      type: String,
    },
    product_id_detail: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "SizeOfProducts",
    },
    quantity: {
      type: Number,
      default: 1,
    },
    total: {
      type: Number,
    },
    price_one_product: {
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
    const cartResult = await model.find({ user_id, status: 0 });
    // khởi tạo một mảng quer lấy ra thông tin của product như size_id , product_id, số lượng
    const promises = cartResult.map((item) => {
      const { product_id_detail } = item;
      return SizeOfProductModel.getSizeOfProductByParams(product_id_detail);
    });
    // thực hiện công việc query ở trên song song với nhau để lấy ra kết quả
    const promisesResult = await Promise.all(promises);
    // khởi tạo một mảng query lấy ra chi tiết thông tin của sản phẩm
    const promise2s = promisesResult.map((item) => {
      const { product_id } = item;
      return ProductModel.getProductById(product_id);
    });
    // thực hiện việc query lấy thông tin product
    const promise2sResult = await Promise.all(promise2s);

    // khởi tạo một mảng để lấy thông tin của size
    const promise3s = promisesResult.map((item) => {
      const { size_id } = item;
      return SizeModel.getSizeById(size_id);
    });
    // thực hiện việc query lấy size
    const promise3sResult = await Promise.all(promise3s);

    const quantitysAndTotalOfProduct = cartResult.map((item) => {
      const { quantity, total } = item;
      return {
        quantity,
        total,
      };
    });
    // kết quả cuối cùng để trả về cho client
    const obj = {
      products: promise2sResult,
      sizesOfproduct: promise3sResult,
      quantitysAndTotalOfProduct,
    };
    return obj;
  }

  async getCartByUserIDAndPRITD(user_id, product_id_detail) {
    const model = this.init();
    return await model.findOne({ user_id, product_id_detail, status: 0 });
  }

  async updateCart(_id, obj) {
    const model = this.init();
    const result = await model
      .updateOne({ _id }, obj)
      .then((res) => {
        return {
          status: true,
          message: "Update success...",
        };
      }) // cập nhật thành công
      .catch((err) => {
        return { status: false, message: "Update failed..." };
      }); // cập nhật thất bại
    return result;
  }

  async addToCart(user_id = "", product_id, size_id = "", quantityTemp = "") {
    try {
      const model = this.init();
      const productModel = ProductModel.init();
      const sizeOfProduct = SizeOfProductModel.init();

      // lấy số tiền của 1 sản phẩm
      const price_one_product = +(
        await ProductModel.getProductById(product_id)
      ).price.replaceAll(".", "");

      // lấy thông tin size của sản phẩm
      const resultQrSizeOfProduct = (
        await SizeOfProductModel.getSizeOfProductByParams({
          product_id,
          size_id,
        })
      )._id;
      // kiểu tra xem sản phẩm đó có tồn tại hay chưa
      const find = await this.getCartByUserIDAndPRITD(
        user_id,
        resultQrSizeOfProduct
      );

      // xử lý khi chưa có sản phẩm trong giỏ
      if (!find) {
        var total = price_one_product * quantityTemp;
        const Obj = {
          user_id,
          product_id_detail: resultQrSizeOfProduct,
          quantity: quantityTemp,
          price_one_product,
          total,
        };
        const cart = new model(Obj);
        const resultAfterSave = await cart
          .save()
          .then((res) => {
            return { status: true, message: "Add success..." };
          }) // thêm thành công
          .catch((err) => {
            return { status: false, message: "Add failed..." };
          }); // thêm thất bại
        return resultAfterSave;
      } else {
        const { _id, quantity } = find;
        const newQuantity = quantity + +quantityTemp;
        const newTotal = price_one_product * newQuantity;
        const resultUpdateCart = await this.updateCart(_id, {
          quantity: newQuantity,
          total: newTotal,
        });
        return resultUpdateCart;
      }
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
