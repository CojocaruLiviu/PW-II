'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Genre extends Model {
    static associate(models) {
      Genre.hasMany(models.Movie)
      Genre.belongsTo(models.User)
    }
  }
  Genre.init(
    {
      id:{
        type:DataTypes.INTEGER,
        primaryKey: true,
      },
      name: DataTypes.STRING(50)
    },
    {
      sequelize,
      modelName: 'Genre'
    }
  );
  return Genre;
};