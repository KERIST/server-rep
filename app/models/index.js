const Sequelize = require("sequelize");
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: process.env.DB_DIALECT,
  operatorsAliases: false,
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("./user.model")(sequelize);
db.login = require("./login.models")(sequelize);
db.item = require("./item.models")(sequelize);
db.directory = require("./directory.models")(sequelize);
db.cart = require('./cart.models')(sequelize);
db.reviews = require('./reviews.models')(sequelize);

db.login.hasOne(db.user, {onDelete: 'cascade'});
db.user.belongsTo(db.login, {onDelete: 'cascade'});
db.login.hasOne(db.cart, {onDelete: 'cascade'});
db.cart.belongsTo(db.login);
db.user.hasMany(db.reviews, {onDelete: 'cascade'});
db.item.hasMany(db.reviews, {onDelete: 'cascade'});

module.exports = db;
