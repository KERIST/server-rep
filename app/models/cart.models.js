const { Sequelize, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Cart = sequelize.define("Cart", {
    id: {
      type: DataTypes.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
    },
  });

  return Cart;
};
