const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/tasks", {
  useNewUrlParser: true,
  useCreateIndex: true,
});
