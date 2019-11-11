const express = require("express");
const cors = require("cors");
require("dotenv").config();
const helmet = require("helmet");

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.get("/", (req, res) => {
  res.status(200).json({ message: "Hello from dummy endpoint" });
});

module.exports = server;
