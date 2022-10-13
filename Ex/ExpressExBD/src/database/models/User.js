'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class User extends Model {
        static associate(models) {
        
        }
    }
    User.init(
        {
            username: {type: String, unique: true, required: true},
            password: {type: String, required: true},
            roles: [{type: String, ref: 'Role'}]
        },
        {
            sequelize,
            modelName: 'User'
        });
    return User;
};