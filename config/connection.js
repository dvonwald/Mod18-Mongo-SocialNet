const { connect, connection } = require("mongoose");

connect("mongodb://localhost/mongoSocialNet", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;
