const db = require("../models");
const User = db.user;
const Login = db.login;

const getUserByEmail = (req, res) => {
  User.findOne({
    where: {
      email: req.body.email,
    },
  }).then((user) => {
    if (!user) {
      res.status(404).send({ message: "User not found." });
    }

    res.status(200).send(user);
  });
};

const updateUserPassword = (req, res) => {
  if (req.body.email !== req.userEmail) {
    res.status(403).send({ message: "Permission is denided" });
  }

  Login.findOne({
    where: {
      email: req.body.email,
    },
  })
    .then((login) => {
      login.hash = bcrypt.hashSync(req.body.password, 8);
      login
        .save()
        .then(() => {
          res
            .status(200)
            .send({ message: "password has been successfully changed" });
        })
        .catch((error) => {
          res.status(400).send({ message: error.message });
        });
    })
    .catch((error) => {
      res.status(400).send({ message: error.message });
    });
};

module.exports = {
  getUserByEmail,
  updateUserPassword,
};
