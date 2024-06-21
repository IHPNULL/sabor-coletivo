require("dotenv").config();
const { connect } = require("mongoose");
const express = require("express");
const userController = require("./controllers/auth/usersController");
const postsController = require("./controllers/auth/postsController");
const loginController = require("./controllers/loginController");
const cors = require("cors");

const server = express();

const port = process.env.port;
const DATABASE_NAME = process.env.DATABASE_NAME;
const DATABASE_USER = process.env.DATABASE_USER;
const DATABASE_PASSWORD = process.env.DATABASE_PASSWORD;

const DATABASE_URL = `mongodb+srv://${DATABASE_USER}:${DATABASE_PASSWORD}@cluster0.of9dejk.mongodb.net/${DATABASE_NAME}?retryWrites=true&w=majority&appName=Cluster0`;

server.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "authorization ");
  res.setHeader("Access-Control-Request-Headers", "authorization");
  res.setHeader("Access-Control-Allow-Credentials", false);
  next();
});

const corsOptions = {
  credentials: true,
  origin: ["http://localhost:3000", "http://localhost:80"], // Whitelist the domains you want to allow
};

server.use(cors(corsOptions));
server.use(express.json());
server.use("/user", userController);
server.use("/posts", postsController);
server.use("/login", loginController);

connect(DATABASE_URL)
  .then(() => {
    console.log("Database connected with success");

    server.listen(port, () => {
      console.log(`server running on ${port}`);
    });
  })
  .catch((err) => console.log(err));
