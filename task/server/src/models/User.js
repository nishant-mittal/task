const mongoose = require("mongoose");

const User = mongoose.model("User", {
  fullname: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
  },
  repassword: {
    type: String,
    trim: true,
  },
});

module.exports = User;
