'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Movie extends Model {
        static associate(models) {
            Movie.hasMany(models.Mov_genr)
            Movie.hasMany(models.User)
        }
    }
    Movie.init(
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true
                
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