// controllers/comment.controller.js
const Comment = require("../models/Comment");

exports.addComment = async (req, res) => {
  const comment = await Comment.create({
    text: req.body.text,
    post: req.params.postId,
    author: req.user.id
  });
  res.json(comment);
};

exports.getComments = async (req, res) => {
  const comments = await Comment.find({ post: req.params.postId })
    .populate("author", "username");
  res.json(comments);
};

exports.deleteComment = async (req, res) => {
  await Comment.findOneAndDelete({
    _id: req.params.id,
    author: req.user.id
  });
  res.json({ message: "Comment deleted" });
};
