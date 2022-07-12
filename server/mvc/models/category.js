const mongoose = require("mongoose");

const Category = new mongoose.Schema(
  {
    name: { type: String },
  },
  { timestamps: true }
);

class CategoryModel {
  init() {
    return mongoose.model("Category", Category);
  }

  async getCategoryById(_id) {
    var category;
    try {
      const model = this.init();
      category = await model.findOne({ _id });
      return {
        status: true,
        category,
      };
    } catch (error) {
      return { status: false, category: {} };
    }
  }

  async addCategory(name) {
    try {
      const model = this.init();
      const category = new model({
        name,
      });
      category.save();
      return true;
    } catch (error) {
      return false;
    }
  }

  async getAllCategory() {
    try {
      const model = this.init();
      const result = await model.find();
      return result;
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = new CategoryModel();
