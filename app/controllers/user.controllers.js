const { handleDefault } = require("../utils/errorHandlers");
const db = require("../models");
const User = db.user;
const Login = db.login;

const getUserByEmail = async (req, res) => {
  let user;

  try {
    user = User.findOne({
      where: {
        email: req.body.email,
      },
    });
  } catch (err) {
    return handleDefault(err, res);
  }

  if (!user) {
    res.status(404).send({ message: "User not found." });
  }

  res.status(200).send(user);
};

const updateUserPassword = async (req, res) => {
  let login;

  try {
    login = await Login.findByPK(req.loginId);
  } catch (err) {
    return handleDefault(err, res);
  }

  if (login.email !== req.userEmail) {
    return res.status(403).send({
      message: "Permission denied!",
    });
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

const createUser = (req, res) => {
  Login.create({
    email: req.body.email,
    hash: bcrypt.hashSync(req.body.password, 8),
    role: req.body.role,
  })
    .then(() => {
      User.create({
        username: req.body.username,
        email: req.body.email,
      }).then(() => {
        res.status(200).send({
          message: `User has been successfully created with role: ${req.body.role}`,
        });
      });
    })
    .catch((error) => {
      res.status(500).send({ message: error.message });
    });
};

module.exports = {
  getUserByEmail,
  updateUserPassword,
  createUser,
};
