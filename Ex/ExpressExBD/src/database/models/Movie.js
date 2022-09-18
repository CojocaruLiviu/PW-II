'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Country extends Model {
        static associate(models) {
            Country.hasMany(models.Movie)
        }
    }
    Country.init(
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            name: {
                type: DataTypes.STRING(50)
            },
            code: {
                type: DataTypes.STRING(2)
            }
        },
        {
            sequelize,
            modelName: 'Movie'
        });
    return Country;
};