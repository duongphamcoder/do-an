const AccountModel = require("../models/account");

class AccountController {
  async createAccount(req, res) {
    try {
      const { username, password } = req.body;
      const result = await AccountModel.createAccount(username, password);
      return res.json({
        err: result,
        message: result ? "Failed!!" : "Success!!",
      });
    } catch (error) {
      return res.json({
        err: true,
        message: "Error!!",
      });
    }
  }

  async login(req, res) {
    try {
      const { username, password } = req.body;
      const result = await AccountModel.findAcountByUsername(
        username,
        password
      );
      return res.json({
        err: result.status,
        messsage: result.status ? "Success!!" : "Failed!!!",
        _id: result.status ? result._id : "",
      });
    } catch (error) {
      return res.json({
        err: false,
        messsage: "Error",
      });
    }
  }
}

module.exports = new AccountController();
