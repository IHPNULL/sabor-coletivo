const mongoose = require("mongoose");

const UserModel = mongoose.model("users", {
  name: String,
  senha: String,
  email: String,
  userCode: Number,
  profilePic: String,
  followers: Array,
  following: Array,
  age: { type: Number, min: 0 },
});

module.exports = UserModel;
