'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Movie extends Model {
        static associate(models) {
            Movie.hasMany(models.User)
        }
    }
    Movie.init(
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            name: {
                type: DataTypes.STRING(50)
            },
          
        },
        {
            sequelize,
            modelName: 'Movie'
        });
    return Movie;
};