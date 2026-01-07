// app.js
const express = require("express");
const app = express();

app.use(express.json());
app.use("/api/auth", require("./routes/auth.routes"));
app.use("/api/posts", require("./routes/post.routes"));
app.use("/api/comments", require("./routes/comment.routes"));

module.exports = app; //
