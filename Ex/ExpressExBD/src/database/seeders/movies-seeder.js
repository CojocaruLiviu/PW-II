'use strict';

const movies = require('../../data/seeders/movies.json')

module.exports = {
  up: async (queryInterface, Sequelize) => {
      await queryInterface.bulkInsert('movies-seeder.js', movies, {}); 
  },

  down: async (queryInterface, Sequelize) => {
      await queryInterface.bulkDelete('movies-seeder.js', null, {});
  }
};