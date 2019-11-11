const db = require("../db-config");

module.exports = {
  addUser,
  findUserById,
  findBy
};

function findUserById(id) {
  return db("users").where({ id });
}

function findBy(filter) {
  return db("users").where(filter).first();
}

function addUser(user) {
  return db("users")
    .insert(user)
    .then(ids => {
      return findUserById(ids[0]);
    });
}
