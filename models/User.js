const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    //must match a valid email address
  },
  // thoughts: {} array of _id values referencing the Thought model,
  // friends: {} array of _id values referencing the User model (self-reference)
});

userSchema.virtual("friendCount").get(function () {
  return this.friends.length;
});
