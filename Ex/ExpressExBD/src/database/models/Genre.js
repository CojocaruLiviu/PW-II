'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Region extends Model {
    static associate(models) {
      Region.belongsTo(models.Movie)
      Region.hasMany(models.Type)
    }
  }
  Region.init(
    {
      name: DataTypes.STRING(50),
      code: DataTypes.STRING(2),
      countryId: DataTypes.INTEGER
    },
    {
      sequelize,
      modelName: 'Genre'
    }
  );
  return Region;
};