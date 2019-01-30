'use strict';

const Sequelize = require('sequelize');
const db = {};

const sequelize = new Sequelize('mysql://root:1234@localhost:3306/chatterbox');

db.Room = require("./room")(sequelize, Sequelize);
db.Post = require("./post")(sequelize, Sequelize);

db.Room.hasMany(db.Post, { foreignKey: 'postId', sourceKey: 'id' });
db.Post.belongsTo(db.Room, { foreignKey: 'postId', targetKey: 'id' });

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
