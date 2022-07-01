const router = require("express").Router();
const {} = require("../../controllers/thoughtController");

// /api/thoughts -- get all thoughts or create new thought
router.route("/").get(getThoughts).post(createThought);

// /api/thoughts/:thoughtId -- get single thought or delete or update thought by thoughtId
router
  .route("/:thoughtId")
  .get(getSingleThought)
  .delete(deleteThought)
  .put(updateThought);

// /api/thoughts/:thoughtId/reactions
router.route("/:thoughtId/reactions").post(postReaction).delete(deleteReaction);

module.exports = router;
