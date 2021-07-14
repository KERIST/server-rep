const { Sequelize, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Directory = sequelize.define("Directory", {
    id: {
      type: DataTypes.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    imageUrl: {
      type: DataTypes.STRING,
    },
    linkUrl: {
      type: DataTypes.STRING,
    },
  });

  return Directory;
};
