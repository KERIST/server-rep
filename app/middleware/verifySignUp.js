const db = require("../models");
const { handleDefault } = require("../utils/errorHandlers");
const User = db.user;
const Login = db.login;

const checkDuplicateUsernameOrEmail = async (req, res, next) => {
  let login;
  let userByEmail;
  let userByUsername;

  try {
    login = await Login.findOne({ where: { email: req.body.email } });
  } catch (err) {
    handleDefault(err, res);
    return;
  }

  if (login) {
    res.status(400).send({
      message: "Failed! Email is already taken",
    });

    return;
  }
  try {
    userByEmail = await User.findOne({ where: { email: req.body.email } });
  } catch (err) {
    handleDefault(err, res);
    return;
  }
  if (userByEmail) {
    res.status(400).send({
      message: "Failed! Email is already taken!",
    });

    return;
  }

  userByUsername = await User.findOne({
    where: { username: req.body.username },
  });

  if (userByUsername) {
    req.status(400).send({
      message: "Failed! Username is already taken!",
    });
  }

  next();
};

const verifySignUp = {
  checkDuplicateUsernameOrEmail,
};

module.exports = verifySignUp;
