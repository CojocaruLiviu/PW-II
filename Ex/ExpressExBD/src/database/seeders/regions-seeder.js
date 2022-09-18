'use strict';

const genres = require('../../data/seeders/genres-seeder.json')

module.exports = {
  up: async (queryInterface, Sequelize) => {
      await queryInterface.bulkInsert('genres', regions, {});
  },

  down: async (queryInterface, Sequelize) => {
      await queryInterface.bulkDelete('genres', null, {});
  }
};