require("dotenv").config();

const express = require("express");
const app = express();

const jwt = require("jsonwebtoken");

app.use(express.json());

const posts = [
  { name: "Aswath", post: "Post 1" },
  { name: "Meena", post: "Post 2" },
];

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];

  const token = authHeader && authHeader.split(" ")[1];

  if (token == null) return res.sendStatus(401);

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);

    req.user = user;

    next();
  });
};

app.get("/posts", authenticateToken, (req, res) => {
  res.json(posts.filter((post) => post.name == req.user.name));
});

app.listen(3000);
