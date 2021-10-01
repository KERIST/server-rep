const { Sequelize, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Reviews = sequelize.define('reviews', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: Sequelize.UUIDV4,
    },
    raiting: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    text: {
      type: DataTypes.STRING,
    },
  });

  return Reviews;
}
