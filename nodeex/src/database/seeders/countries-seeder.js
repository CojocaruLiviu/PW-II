'use strict';

const movies = require('../../data/seeders/movies-seeder.json')

module.exports = {
  up: async (queryInterface, Sequelize) => {
      await queryInterface.bulkInsert('movies', movies, {}); 
  },

  down: async (queryInterface, Sequelize) => {
      await queryInterface.bulkDelete('movies', null, {});
  }
};