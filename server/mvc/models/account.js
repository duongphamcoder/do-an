const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const Account = new mongoose.Schema(
  {
    username: {
      type: String,
      unique: true,
    },
    password: {
      type: String,
    },
  },
  { timestamps: true }
);

class AccountModel {
  init() {
    return mongoose.model("Account", Account);
  }

  async createAccount(username, password) {
    const model = this.init();
    const newPassword = await bcrypt.hash(password, 10);
    const account = new model({
      username,
      password: newPassword,
    });
    return await account
      .save()
      .then((req) => false)
      .catch((error) => true);
  }

  async findAcountByUsername(username, password) {
    const model = this.init();
    const account = await model.findOne({ username }).then(async (result) => {
      return {
        _id: result._id,
        status: await bcrypt.compare(password, result.password),
      };
    });
    return account;
  }
}

module.exports = new AccountModel();
