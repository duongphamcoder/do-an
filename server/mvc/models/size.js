const mongoose = require("mongoose");

const Size = new mongoose.Schema(
  {
    name: {
      type: String,
      unique: true,
    },
  },
  { timestamps: true }
);

class SizeModel {
  init() {
    return mongoose.model("Size", Size);
  }

  async getSizeById(_id) {
    const model = this.init();
    const result = await model.findById(_id);
    return result;
  }

  async addSize(name) {
    const model = this.init();
    const size = new model({
      name,
    });
    // trả về false là không lỗi và thêm thành công
    // trả về true là lỗi và thêm thất bại
    return await size
      .save()
      .then((req) => {
        return false;
      })
      .catch((err) => {
        return true;
      });
  }

  async getAllSize() {
    const model = this.init();
    const result = await model.find();
    return result;
  }
}

module.exports = new SizeModel();
