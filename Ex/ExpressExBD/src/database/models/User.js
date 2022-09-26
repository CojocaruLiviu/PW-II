'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.belongsTo(models.User)
    //   User.belongsTo(models.Mov_coments)
      User.hasMany(models.Movie)
    }
  }
  User.init(
    {
      id:{
        type:DataTypes.INTEGER,
        primaryKey: true,
      },
      name: DataTypes.STRING(50)
    },
    {
      sequelize,
      modelName: 'User'
    }
  );
  return User;
};