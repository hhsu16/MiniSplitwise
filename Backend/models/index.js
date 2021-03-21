const config = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(config.DB, config.USER, config.PASSWORD, {
  host: config.HOST,
  dialect: config.dialect,
  operatorsAliases: false,

  pool: {
    max: config.pool.max,
    min: config.pool.min,
    acquire: config.pool.acquire,
    idle: config.pool.idle,
  },
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("../models/user.model.js")(sequelize, Sequelize);
db.friendship = require("../models/friendship.model.js")(sequelize, Sequelize);
db.group = require("../models/group.model.js")(sequelize, Sequelize);

db.user.hasMany(db.friendship, { as: "friendship" });
db.friendship.belongsTo(db.user, {
  foreignKey: "friendshipId",
  as: "friend",
});

db.user.hasMany(db.group, { as: "group" });
db.group.belongsTo(db.user, {
  foreignKey: "groupId",
  as: "group",
});

module.exports = db;
