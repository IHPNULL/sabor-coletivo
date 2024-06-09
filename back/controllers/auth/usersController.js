const bcrypt = require("bcryptjs");
const express = require("express");
const UserModel = require("../../models/user");
const auth = require("../../middleware/auth");
const userController = express.Router();

userController.get("/funcoes", auth, async (req, res) => {
  const users = await UserModel.find();

  let funcoes = [];
  users.forEach((user) => {
    if (funcoes.includes(user.funcao)) {
      return;
    }
    funcoes.push(user.funcao);
  });

  const funcaoCounter = funcoes.map((funcao) => {
    return {
      funcao: funcao,
      count: users.filter((user) => user.funcao === funcao).length,
    };
  });

  return res.status(200).json(funcaoCounter);
});

userController.get("/:email", auth, async (req, res) => {
  const email = req.params.email;

  const user = await UserModel.findOne({ email: email });
  if (!user) {
    return res.status(404).json({ mensagem: "Usuário não encontrado!" });
  }
  return res.status(200).json(user);
});

userController.post("/new", async (req, res) => {
  const { nome, email, senha } = req.body;
  const senhaEncrypt = await bcrypt.hash(senha, 10);
  const user = {
    nome,
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
