const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
    operatorsAliases: false,
  }
);

const User = require("./user.model")(sequelize);
const Login = require("./login.models")(sequelize);
const Item = require("./item.models")(sequelize);
const Directory = require("./directory.models")(sequelize);
const Cart = require("./cart.models")(sequelize);
const Review = require("./review.models")(sequelize);
const ItemReviews = require("./ItemReviews")(sequelize, Item, Review, Login);
// TODO: Add Order table

Login.hasOne(User, { onDelete: "cascade" });
User.belongsTo(Login, { onDelete: "cascade" });
Login.hasOne(Cart, { onDelete: "cascade" });
Cart.belongsTo(Login);
User.hasMany(Review, { onDelete: "cascade" });
Item.hasMany(Review, { onDelete: "cascade" });

Review.belongsToMany(Item, { through: ItemReviews });
Review.belongsToMany(Login, { through: ItemReviews });
Item.belongsToMany(Review, { through: ItemReviews, onDelete: "cascade" });
Login.belongsToMany(Review, { through: ItemReviews, onDelete: "cascade" });

module.exports = {
  sequelize,
  User,
  Login,
  Item,
  Directory,
  Cart,
  Review,
  ItemReviews,
};
