
'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Role extends Model {
        static associate(models) {
           
        }
    }
    Role.init(
        {
            value: {type: String, unique: true, default: "User"},
        },
        {
            sequelize,
            modelName: 'Role'
        });
    return Role;
};