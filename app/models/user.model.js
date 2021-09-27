const { DataTypes, Sequelize } = require("sequelize");

module.exports = (sequelize) => {
  const User = sequelize.define("users", {
    id: {
      type: DataTypes.UUID,
      allowNull: false,  
      primaryKey: true,
      defaultValue: Sequelize.UUIDV4,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
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
