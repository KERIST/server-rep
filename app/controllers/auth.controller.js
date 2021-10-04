const { User, Login } = require("../models");
const { handleDefault } = require("../utils/errorHandlers");

const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

exports.signup = async (req, res) => {
  let login;
  let user;

  try {
    login = await Login.create({
      email: req.body.email,
      hash: bcrypt.hashSync(req.body.password, 8),
    });
  } catch (err) {
    return handleDefault(err, res);
  }

  try {
    user = await User.create({
      username: req.body.username,
      email: req.body.email,
    });
  } catch (err) {
    return handleDefault(err, res);
  }

  const token = jwt.sign({ id: login.id }, process.env.SECRET, {
    expiresIn: 86400,
  });

  login.setUser(user).catch((err) => console.log(err));

  res.status(200).send({
    username: user.username,
    email: user.email,
    imageUrl: user.imageUrl,
    accessToken: token,
  });
};

exports.signin = async (req, res) => {
  let login;
  let user;

  try {
    login = await Login.findOne({ where: { email: req.body.email } });
  } catch (err) {
    return handleDefault(err, res);
  }

  if (!login) {
    return res.status(404).send({ message: "User Not Found." });
  }

  const passwordIsValid = await bcrypt.compare(req.body.password, login.hash);

  if (!passwordIsValid) {
    return res.status(401).send({
      accessToken: null,
      message: "Invalid password!",
    });
  }

  const token = jwt.sign(
    { id: login.id, role: login.role },
    process.env.SECRET,
    {
      expiresIn: "24h",
    }
  );

  try {
    user = await User.findOne({ where: { email: req.body.email } });
  } catch (err) {
    return handleDefault(err, res);
  }

  res.status(200).send({
    username: user.username,
    email: user.email,
    imageUrl: user.imageUrl,
    accessToken: token,
  });
};
