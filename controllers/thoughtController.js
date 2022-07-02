const { Thought, Reaction } = require("../models");
const User = require("../models/User.js");

module.exports = {
  // working
  getThoughts(req, res) {
    Thought.find()
      .then((thoughts) => res.json(thoughts))
      .catch((err) => res.status(500).json(err));
  },
  postThought(req, res) {
    // tested working and adding to user's thoughts array
    Thought.create(req.body)
      .then((thought) => {
        console.log(thought);
        return User.findOneAndUpdate(
          { username: req.body.username },
          { $addToSet: { thoughts: thought } },
          { new: true }
        );
      })
      .then((user) =>
        !user
          ? res.status(404).json({
              message: "Thought created but no user with that userId found.",
            })
          : res.json("Thought posted!")
      )
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
  getSingleThought(req, res) {
    // working
    Thought.findOne({ _id: req.params.thoughtId })
      .then((thought) =>
        !thought
          ? res
              .status(404)
              .json({ message: "No thought with this thoughtId found." })
          : res.json(thought)
      )
      .catch((err) => res.status(500).json(err));
  },
  deleteThought(req, res) {
    // working but need to add in console.log feedback
    Thought.findOneAndDelete({ _id: req.params.thoughtId })
      .then((thought) =>
        !thought
          ? res.status(404).json("No thought with that thoughtId found.")
          : res.json(thought)
      )
      .catch((err) => res.status(500).json(err));
  },
  // updateThought(req, res) {
  //   Thought.findOneAndUpdate(
  //     console.log(req.body),
  //     { _id: req.params.thoughtId },
  //     { $set: { thoughtTest: req.body } }
  //   );
  // },
};
