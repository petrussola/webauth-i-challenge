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

router.get("/:id", restricted, (req, res) => {
  const { id } = req.params;
  Users.findUserById(id)
    .then(data => {
      res.status(200).json(data);
    })
    .catch(error => {
      res
        .status(404)
        .json({
          message: `There was a problem fetching user ${id}: ${error.message}`
        });
    });
});

module.exports = router;
