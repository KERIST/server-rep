const jwt = require("jsonwebtoken");
const config = require("../config/auth.config");
const db = require("../models");
const User = db.user;

const verifyToken = (req, res, next) => {
  let token = req.headers["x-access-token"];

  if (!token) {
    return res.status(403).send({
      message: "No token provided!",
    });
  }

  jwt.verify(token, config.secret, (err, decoded) => {
    if (err) {
      return res.status(401).send({
        message: "Unauthorized!",
      });
    }

    req.userEmail = decoded.email;
    req.isModerator = decoded.isModerator || false;
    req.isAdmin = decoded.isAdmin || false;

    next();
  });
};

const isModerator = (req, res, next) => {
  if (!req.isModerator) {
    return res.status(403).send({
      message: "Permission denied!",
    });
  }

  next();
};

const isAdmin = (req, res, next) => {
  if (!req.isAdmin) {
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
