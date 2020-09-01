const express = require("express");
require("./db/mongoose");
var cors = require("cors");
const User = require("./models/User");

const app = express();
const port = 3002;
app.use(express.json());
app.use(cors());
app.post("/users", (req, res) => {
  console.log(req.body);
  const user = new User(req.body);
  user
    .save()
    .then(() => {
      console.log(user);
      res.status(200).send(user);
    })
    .catch((e) => console.log(e));
});

app.get("/users", (req, res) => {
  User.find({}).then((user) => {
    res.send(user);
  });
});

app.patch("/users/:id", (req, res) => {
  const _id = req.params.id;
  User.findByIdAndUpdate(_id, { ...req.body }).then((user) => res.send(user));
});
// app.patch("/users/:id", (req, res) => {
//   const _id = req.params.id;
//   User.findByIdAndUpdate(_id, req.body).then((user) => {
//     if (!user) {
//       return res.status(400).send();
//     }
//     res.send(user);
//   });
// });
app.listen(port, () => {
  console.log("Listening on port " + port);
});
