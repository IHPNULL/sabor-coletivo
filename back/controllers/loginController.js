const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const express = require("express");
const UserModel = require("../models/user");
const loginController = express.Router();

loginController.post("/", async (req, res) => {
  const { email, senha } = req.body;

  const user = await UserModel.findOne({ email: email });
  if (!user) {
    return res.status(404).json({ mensagem: "Usuário não encontrado!" });
  }

  if (await bcrypt.compare(senha, user.senha)) {
    const token = jwt.sign(
      { id: user.id, name: user.name, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: "2d" }
    );

    return res.status(200).json({
      mensagem: `Bem vindo ${user.name}`,
      name: user.name,
      userCode: user._id,
      followers: user.followers,
      following: user.following,
      token: token,
    });
  } else {
    return res.status(401).json({ mensagem: "Email ou senha incorretos!" });
  }
});

module.exports = loginController;
