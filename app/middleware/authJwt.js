const jwt = require("jsonwebtoken");
const db = require("../models");
const User = db.user;

const verifyToken = (req, res, next) => {
  let token = req.headers["x-access-token"];

  if (!token) {
    return res.status(403).send({
      message: "No token provided!",
    });
  }

  jwt.verify(token, process.env.SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).send({
        message: "Unauthorized!",
      });
    }

    req.loginId = decoded.id;
    req.role = decoded.role || 0;

    next();
  });
};

const isModerator = (req, res, next) => {
  if (req.role < 2) {
    return res.status(403).send({
      message: "Permission denied!",
    });
  }

  next();
};

const isAdmin = (req, res, next) => {
  if (req.role < 3) {
    return res.status(403).send({
      message: "Permission denied!",
    });
  }

  next();
};

const authJwt = {
  verifyToken,
  isModerator,
  isAdmin,
};

module.exports = authJwt;
