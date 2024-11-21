const express = require("express");

const app = express();

app.use("/api/posts", (req, res, next) => {
  const posts = [{ id: "fadf1234123", title: "First post", content: "post content" }];

  return res.status(200).json({
    message: "Posts fetched successfully",
    posts: posts,
  });
});

module.exports = app;
