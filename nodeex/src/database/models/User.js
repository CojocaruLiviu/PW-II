'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.belongsTo(models.Movie)
      User.hasMany(models.Genre)
    }
  }
  User.init(
    {
      name: DataTypes.STRING(50),
      code: DataTypes.STRING(2),
      movieId: DataTypes.INTEGER
    },
    {
      sequelize,
      modelName: 'User'
    }
  );
  return User;
};