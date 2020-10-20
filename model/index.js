var Sequelize = require('sequelize')
var config = require('../config/db.config')
// 实例化sequelize
const sequelize = new Sequelize(config)

// 导入模型统一管理(推荐使用官方方法)
const Message = require('./message')(sequelize,Sequelize.DataTypes)
const User = require('./user')(sequelize,Sequelize.DataTypes)


User.hasMany(Message)
Message.belongsTo(User)
  // User.hasMany(Message, {as: 'message'})
  // Message.belongsTo(User, {
  // foreignKey: 'username',
  // targetKey:'username'
  // })  

// User.hasMany(Message, {foreignKey:'username',targetKey:'username'})
module.exports = {
  sequelize,
  User,
  Message
}
