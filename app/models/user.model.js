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
    },
    imageUrl: {
      type: DataTypes.STRING,
      defaultValue:
        "https://images.pexels.com/photos/33684/astronaut-spacewalk-iss-tools.jpg",
    },
  });

  return User;
};
