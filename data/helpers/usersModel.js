const db = require("../db-config");

module.exports = {
  addUser
};

function findUserById(id) {
  return db("users").where({ id });
}

function addUser(user) {
  return db("users")
    .insert(user)
    .then(ids => {
      return findUserById(ids[0]);
    });
}
