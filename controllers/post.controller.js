// controllers/post.controller.js
const Post = require("../models/Post");

exports.createPost = async (req, res) => {
  const post = await Post.create({ ...req.body, author: req.user.id });
  res.json(post);
};

exports.getPosts = async (req, res) => {
  const posts = await Post.find().populate("author", "username");
  res.json(posts);
};

exports.updatePost = async (req, res) => {
  const post = await Post.findOneAndUpdate(
    { _id: req.params.id, author: req.user.id },
    req.body,
    { new: true }
  );
  res.json(post);
};

exports.deletePost = async (req, res) => {
  await Post.findOneAndDelete({ _id: req.params.id, author: req.user.id });
  res.json({ message: "Post deleted" });
};
