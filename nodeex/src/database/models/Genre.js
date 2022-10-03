'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Genre extends Model {
    static associate(models) {
      Genre.belongsTo(models.User)
    }
  }
  Genre.init(
    {
      name: DataTypes.STRING(50),
      userId: DataTypes.INTEGER
    }, 
    {
      sequelize,
      modelName: 'Genre'
    }
  );
  return Genre;
};