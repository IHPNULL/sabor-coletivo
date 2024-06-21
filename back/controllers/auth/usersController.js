const bcrypt = require("bcryptjs");
const express = require("express");
const UserModel = require("../../models/user");
const auth = require("../../middleware/auth");
const userController = express.Router();

userController.post("/signup", async (req, res) => {
  const { name, email, senha } = req.body;
  const senhaEncrypt = await bcrypt.hash(senha, 10);
  const user = {
    name,
    email,
    senha: senhaEncrypt,
  };

  try {
    await UserModel.create(user);
    return res.status(201).json(user);
  } catch (err) {
    console.log(`Error while creating a new user: ${err}`);
    return res.status(500).json({ error: err });
  }
});

// auth,
userController.get("/:user", auth, async (req, res) => {
  try {
    const _user = await UserModel.findById(req.params.user);
    return res.status(200).json({
      name: _user.name,
      _userCode: _user._id,
      followers: _user.followers,
      following: _user.following,
    });
  } catch (err) {
    console.log(`Error while getting posts: ${err}`);
    return res.status(500).json({ error: err });
  }
});

module.exports = userController;
