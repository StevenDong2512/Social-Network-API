const { User } = require("../models");

const UserController = {
  //Get all users
  getAllUsers(req, res) {
    User.find({})
      .then((userData) => res.json(userData))
      .catch((err) => res.status(500).json(err));
  },
  //Get single user by ID
  getUserById(req, res) {
    User.findById(req.params.userId)
      .then((userData) => res.json(userData))
      .catch((err) => res.status(500).json(err));
  },
  //Create a new user
  createUser(req, res) {
    User.create(req.body)
      .then((userData) => res.json(userData))
      .catch((err) => res.status(500).json(err));
  },
  //Delete a user
  deleteUserById(req, res) {
    User.findOneAndDelete(req.params.id)
      .then((userData) => {
        if (!userData) {
          return res.status(404).json({ message: "User not found." });
        }
        res.json({ message: "User deleted." });
      })
      .catch((err) => res.status(500).json(err));
  },
  //Update a user by ID
  updateUserById(req, res) {
    User.findOneAndUpdate(req.params.id, req.body, { new: true })
      .then((userData) => {
        if (!userData) {
          return res.status(404).json({ message: "User not found." });
        }
        res.json(userData);
      })
      .catch((err) => res.status(500).json(err));
  },
};

module.exports = UserController;
