module.exports = Message = (sequelize,DataTypes) => {
  //这里的banner为你的数据表名
   return sequelize.define('message', {
    id:{ //自增长id,主键,整形
      type:DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement:true
    },
    content: { //留言的内容
        type: DataTypes.TEXT
    }
   })
 }  

  // Message.belongsTo(User, {
  //   foreignKey: 'username',
  //   targetKey:'username'
  // })

  // Message.sync({
  //   force:true
  // }); //创建表
  