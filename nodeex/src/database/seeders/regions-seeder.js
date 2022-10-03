'use strict';

const users = require('../../data/seeders/users-seeder.json')

module.exports = {
  up: async (queryInterface, Sequelize) => {
      await queryInterface.bulkInsert('users', users, {});
  },

  down: async (queryInterface, Sequelize) => {
      await queryInterface.bulkDelete('users', null, {});
  }
};