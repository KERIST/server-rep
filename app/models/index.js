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

Login.hasOne(User, { onDelete: "cascade" });
User.belongsTo(Login, { onDelete: "cascade" });

User.hasMany(Review, { onDelete: "cascade" });
Item.hasMany(Review, { onDelete: "cascade" });

Item.belongsToMany(Login, { through: Cart, onDelete: "cascade" });
Login.belongsToMany(Item, { through: Cart, onDelete: "cascade" });

module.exports = {
  sequelize,
  User,
  Login,
  Item,
  Directory,
  Cart,
  Review,
};
