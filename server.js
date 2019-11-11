// DEPENDENCIES

const express = require("express");
const cors = require("cors");
require("dotenv").config();
const helmet = require("helmet");

// HELPERS

const Users = require("./data/helpers/usersModel");

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.post("/api/register", (req, res) => {
  Users.addUser(req.body)
    .then(data => {
      res.status(200).json(data);
    })
    .catch(error => {
      console.log(error);
    });
});

// DUMMY ENDPOINT

server.get("/", (req, res) => {
  res.status(200).json({ message: "Hello from dummy endpoint" });
});

module.exports = server;
