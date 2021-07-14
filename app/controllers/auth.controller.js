const db = require("../models");
const config = require("../config/auth.config");
const User = db.user;
const Login = db.login;

const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

exports.signup = (req, res) => {
  Login.create({
    email: req.body.email,
    hash: bcrypt.hashSync(req.body.password, 8),
  })
    .then((login) => {
      User.create({
        username: req.body.username,
        email: req.body.email,
      }).then((user) => {
        const token = jwt.sign({ email: login.email }, config.secret, {
          expiresIn: 86400,
        });

        res.status(200).send({
          username: user.username,
          email: user.email,
          imageUrl: user.imageUrl,
          accessToken: token,
        });
      });
    })
    .catch((error) => {
      res.status(500).send({ message: error.message });
    });
};

exports.signin = (req, res) => {
  Login.findOne({
    where: {
      email: req.body.email,
    },
  })
    .then((login) => {
      if (!login) {
        return res.status(404).send({ message: "User Not Found." });
      }

      const passwordIsValid = bcrypt.compareSync(req.body.password, login.hash);

      if (!passwordIsValid) {
        return res.status(401).send({
          accessToken: null,
          message: "Invalid password!",
        });
      }

      const token = jwt.sign({ email: user.email }, config.secret, {
        expiresIn: 86400,
      });

      User.findOne({
        where: {
          email: req.body.email,
        },
      })
        .then((user) => {
          res.status(200).send({
            username: user.username,
            email: user.email,
            imageUrl: user.imageUrl,
            accessToken: token,
          });
        })
        .catch((error) => {
          res.status(400).send({ message: error.message });
        });
    })
    .catch((error) => res.status(500).send({ message: error.message }));
};
