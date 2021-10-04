const { Sequelize, DataTypes } = require('sequelize');

module.exports = (sequelize, Item, Review, Login) => {
  const ItemReviews = sequelize.define('ItemReviews', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: Sequelize.UUIDV4,
    },
    itemId: {
      type: DataTypes.UUID,
      references: {
        model: Item,
        key: 'id',
      },
    },
    reviewId: {
      type: DataTypes.UUID,
      references: {
        model: Review,
        key: 'id',
      },
    },
    loginId: {
      type: DataTypes.UUID,
      references: {
        model: Login,
        key: 'id',
      },
    }
  });

  return ItemReviews;
}
