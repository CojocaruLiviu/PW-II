'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Mov_genr extends Model {
    static associate(models) {
        Mov_genr.belongsTo(models.Movie)
        Mov_genr.belongsTo(models.Genre)
    }
  }
  Mov_genr.init(
    {
      Movie_id: DataTypes.INTEGER,
      Genre_id: DataTypes.INTEGER
    }, 
    {
      sequelize,
      modelName: 'Mov_genr'
    }
  );
  return Mov_genr;
};