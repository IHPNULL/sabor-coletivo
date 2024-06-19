const bcrypt = require("bcryptjs");
const express = require("express");
const UserModel = require("../../models/user");
const userController = express.Router();

userController.post("/", async (req, res) => {
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

module.exports = userController;
