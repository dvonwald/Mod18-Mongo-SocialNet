const User = require("../models/User"); // requiring in the user model file

module.exports = {
  //Get all users -- Tested working
  getUsers(req, res) {
    User.find()
      .then((users) => res.json(users))
      .catch((err) => res.status(500).json(err));
  }, // Get single user with userId/_Id -- Tested working
  getSingleUser(req, res) {
    console.log(req.params.userId);
    User.findOne({ _id: req.params.userId })
      // .populate("thoughts")
      .then((user) =>
        !user
          ? res.status(404).json("No user with that userId found")
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  }, // Create new user -- Tested working
  createUser(req, res) {
    User.create(req.body)
      .then((dbUserData) => res.json(dbUserData))
      .catch((err) => res.status(500).json(err));
  }, // Delete user by userId/_Id -- Tested working
  deleteUser(req, res) {
    User.findOneAndDelete({ _id: req.params.userId })
      .then((user) =>
        !user
          ? res.status(404).json("No user with that userId found.")
          : res.json(`${user.username} has been deleted`)
      )
      .catch((err) => res.status(500).json(err));
  },
};
