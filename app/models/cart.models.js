const { Sequelize, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Cart = sequelize.define("Cart", {
    id: {
      type: DataTypes.UUID,
      defaultValue: Sequelize.UUIDV4,
      primaryKey: true,
    },
    items: {
      type: DataTypes.STRING,
      allowNull: false,
      get() {
        return this.getDataValue('items').split(';');
      },
      set(val) {
        return this.setDataValue('items', val.join(';'));
      }
    },
  });

  return Cart;
};
