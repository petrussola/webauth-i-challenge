// DEPENDENCIES

const express = require("express");
const cors = require("cors");
require("dotenv").config();
const helmet = require("helmet");
const session = require("express-session");

// IMPORT ROUTER

const authRouter = require("./data/helpers/authRouter");
const userRouter = require("./data/helpers/userRouter");

const server = express();

// SESSIONCONFIG

const sessionConfig = {
  name: "daCookie",
  secret: "this is a super secret key",
  cookie: {
    maxAge: 1000 * 60 * 60,
    secure: false,
    httpOnly: false
  },
  resave: false,
  saveUninitialized: false
};

// MIDDLEWARE

server.use(helmet());
server.use(cors());
server.use(express.json());
server.use(session(sessionConfig));

// ROUTERS

server.use("/api/auth", authRouter);
server.use("/api/users", userRouter);

// DUMMY ENDPOINT

server.get("/", (req, res) => {
  res.status(200).json({ message: "Hello from dummy endpoint" });
});

module.exports = server;
