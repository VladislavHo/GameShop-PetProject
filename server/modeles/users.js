const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const usersSchema = new Schema({
  userName: {
    type: String,
    required: true,
  },
  userPassword: {
    type: String,
    required: true,
  },
});

const User = mongoose.model("User", usersSchema);

module.exports = User;
