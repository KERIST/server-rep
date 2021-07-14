const { Sequelize, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Login = sequelize.define("login", {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    hash: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  return Login;
};
