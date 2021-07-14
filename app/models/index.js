const config = require("../config/db.config");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(config.DB, config.USER, config.PASSWORD, {
  host: config.HOST,
  dialect: config.dialect,
  operatorsAliases: false,

  pool: {
    ...config.pool,
  },
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
