'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Movie extends Model {
        static associate(models) {
            Movie.hasMany(models.Movie)
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
            year:{
                type: DataTypes.FLOAT(4)
            },
            time:{
                type: DataTypes.FLOAT(2.2)
            }
        },
        {
            sequelize,
            modelName: 'Movie'
        });
    return Movie;
};