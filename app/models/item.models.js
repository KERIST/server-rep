const { Sequelize, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Item = sequelize.define("Item", {
    id: {
      type: DataTypes.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    section: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.STRING,
    },
    sizes: {
      type: DataTypes.JSON,
    },
    price: {
      type: DataTypes.INTEGER,
    },
  });

  return Item;
};
