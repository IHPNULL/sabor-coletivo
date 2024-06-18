const bcrypt = require("bcryptjs");
const express = require("express");
const UserModel = require("../../models/user");
const postsController = express.Router();
const auth = require("../../middleware/auth");
const cors = require("cors");
const PostModel = require("../../models/post");

var whitelist = ["http://localhost:3000"];
var corsOptionsDelegate = function (req, callback) {
  var corsOptions;
  if (whitelist.indexOf(req.header("Origin")) !== -1) {
    corsOptions = { origin: true }; // reflect (enable) the requested origin in the CORS response
  } else {
    corsOptions = { origin: false }; // disable CORS for this request
  }
  callback(null, corsOptions); // callback expects two parameters: error and options
};

postsController.post("/new", cors(corsOptionsDelegate), async (req, res) => {
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
postsController.get("/:user", auth, async (req, res) => {
  const { user } = req.params.user;
  try {
    const posts = await PostModel.find({ userCode: user });
    return res.status(200).json(posts);
  } catch (err) {
    console.log(`Error while getting posts: ${err}`);
    return res.status(500).json({ error: err });
  }
});

// endpoint
postsController.post("/:d/like", auth, async(req, res) => {
  const { id } = req.params;

  try {
    const post = await PostModel.findById(id);
    if (!post) {
      return res.status(404).json({ error: "Post not found"});
    }

    post.likes += 1;
    await post.save();

    return res.status(200).json({message: "Likes incremented", likes: post.likes});
  } catch (err) {
    console.log('Error while incremeting likes: ${err}');
    return res.status(500).json({error: err});
  }
});

module.exports = postsController