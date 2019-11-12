const express = require("express");
const Users = require("./usersModel");
const restricted = require("./restricted-middleware");

const router = express.Router();

router.get("/", restricted, (req, res) => {
  Users.findAll()
    .then(data => {
      res.status(200).json(data);
    })
    .catch(error => {
      console.log(error);
    });
});

module.exports = router;
