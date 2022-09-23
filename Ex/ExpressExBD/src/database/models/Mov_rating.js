'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Rating extends Model {
    static associate(models) {
      Rating.belongsTo(models.Mov_rating)
    }
  }
  Rating.init(
    {
      name: DataTypes.STRING(50)
    }, 
    {
      sequelize,
      modelName: 'Mov_rating'
    }
  );
  return Rating;
};