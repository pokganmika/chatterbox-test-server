'use strict';

const Sequelize = require('sequelize');
const db = {};

const sequelize = new Sequelize('mysql://root:1234@localhost:3306/chatterbox');

db.User = require("./user")(sequelize, Sequelize);
db.Room = require("./room")(sequelize, Sequelize);
db.Post = require("./post")(sequelize, Sequelize);

// db.User.hasMany(db.Post, { foreignKey: 'userId', sourceKey: 'id' });
// db.Post.belongsTo(db.User, { foreignKey: 'userId', targetKey: 'id' });

db.Room.hasMany(db.Post, { foreignKey: 'roomId', sourceKey: 'id' });
db.Post.belongsTo(db.Room, { foreignKey: 'roomId', targetKey: 'id' });

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
