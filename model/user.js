module.exports = User = (sequelize, DataTypes) => {
  //这里的banner为你的数据表名
   return sequelize.define('user', {
    id:{
      type:DataTypes.INTEGER,
      primaryKey:true,
      autoIncrement:true
    },
    username:{
      type:DataTypes.STRING(30)
    }
   })
 }  

 