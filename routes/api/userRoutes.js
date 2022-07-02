const router = require("express").Router();
const {
  getUsers,
  createUser,
  getSingleUser,
  deleteUser,
  updateUser,
  addFriend,
  removeFriend,
} = require("../../controllers/userController");

// /api/users -- get all users or create new user
router.route("/").get(getUsers).post(createUser);

// /api/users/:userId -- get or delete or update single user by userId
router.route("/:userId").get(getSingleUser).delete(deleteUser);
// .put(updateUser);

// /api/users/:userId/friends/:friendId
router.route("/:userId/friends/:friendId").post(addFriend);
// .delete(removeFriend);

module.exports = router;
