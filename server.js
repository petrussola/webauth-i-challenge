// DEPENDENCIES

const express = require("express");
const cors = require("cors");
require("dotenv").config();
const helmet = require("helmet");
const bcrypt = require("bcryptjs");

// HELPERS

const Users = require("./data/helpers/usersModel");

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

// ENDPOINTS

server.post("/api/register", (req, res) => {
  let user = req.body;
  const hash = bcrypt.hashSync(user.password, 11);
  const newUser = {
    users: req.body.users,
    password: hash
  };
  Users.addUser(newUser)
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
