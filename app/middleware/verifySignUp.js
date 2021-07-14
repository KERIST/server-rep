const db = require("../models");
const User = db.user;
const Login = db.login;

const checkDuplicateUsernameOrEmail = (req, res, next) => {
  // Username
  Login.findOne({
    where: {
      email: req.body.email,
    },
  }).then((login) => {
    if (login) {
      res.status(400).send({
        message: "failed! username is already taken",
      });
      return;
    }

    // Email
    User.findOne({
      where: {
        email: req.body.email,
      },
    }).then((user) => {
      if (user) {
        res.status(400).send({
          message: "failed email is already taken",
        });
      }
      return;
    });

    next();
  });
};

const verifySignUp = {
  checkDuplicateUsernameOrEmail,
};

module.exports = verifySignUp;
