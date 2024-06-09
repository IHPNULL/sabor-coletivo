const mongoose = require("mongoose");

const PostModel = mongoose.model("posts", {
  title: String,
  postCode: Number,
  userCode: String,
  postPics: Array,
  likes: Array,
  dateTime: Date,
  ingredients: [String],
  steps: [String],
  calories: Number,
  portion: Number,
  protein: Number,
  carbs: Number,
  fat: Number,
});

module.exports = PostModel;
