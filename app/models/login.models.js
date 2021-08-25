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
    role: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
    },
  });

  return Login;
};
