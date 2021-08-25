const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const User = sequelize.define("users", {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    imageUrl: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue:
        "https://images.pexels.com/photos/33684/astronaut-spacewalk-iss-tools.jpg",
    },
  });

  return User;
};
