const { Schema, model } = require("mongoose");

const reactionSchema = new Schema({
  reactionId: {
    //use mongoose's ObjectID data type default
  },
  reactionBody: {
    type: String,
    required: true,
    maxLength: 280,
  },
  username: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    //getter method to format the timestamp on query
  },
});

//this will not be a model but rather will be used as the reaction field's subdocument schema in the Thought model

module.exports = reactionSchema;
