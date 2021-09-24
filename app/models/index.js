const Sequelize = require("sequelize");
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: process.env.DB_DIALECT,
  operatorsAliases: false,
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("../models/user.model")(sequelize);
db.login = require("../models/login.models")(sequelize);
db.item = require("../models/item.models")(sequelize);
db.directory = require("../models/directory.models")(sequelize);

db.login.hasOne(db.user);
db.user.belongsTo(db.login);

module.exports = db;
