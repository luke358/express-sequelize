# express-sequelize
express使用sequelize进行model的建立和联表查询

#中间模型创建的过程，由于new的sequelize不是同一个，所以模型相互引用的过程会出现问题，因此创建一个中间站，用来导入sequelize模型。
官网推荐使用
sequelize.import
但是我测试的时候出现了问题
// 导入模型统一管理(推荐使用官方方法)
const Message = require('./message')(sequelize,Sequelize.DataTypes)
const User = require('./user')(sequelize,Sequelize.DataTypes)
