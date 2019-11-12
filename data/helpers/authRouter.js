const express = require("express");
const bcrypt = require("bcryptjs");

const router = express.Router();

// HELPERS

const Users = require("./usersModel");

router.post("/register", (req, res) => {
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

router.post("/login", (req, res) => {
  let { users, password } = req.body;
  Users.findBy({ users })
    .then(user => {
      if (user && bcrypt.compareSync(password, user.password)) {
        req.session.user = user;
        res.status(200).json({ message: `Welcome ${user.users}` });
      } else {
        res.status(401).json({ message: `Invalid Credentials` });
      }
    })
    .catch(error => {
      console.log(error);
    });
});

router.get("/logout", (req, res) => {
  if (req.session && req.session.user) {
    req.session.destroy(err => {
      if (err) {
        res
          .status(401)
          .json({ message: `Log out was unsuccesful: ${err.message}` });
      } else {
        res.status(200).json({ message: `You have succesfully logged out` });
      }
    });
  } else {
    res.end();
  }
});

module.exports = router;
