'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('mov-genr',
      {
        genre_id: {
          allowNull: false,
          // autoIncrement: true,
          foreignKey: true,
          type: Sequelize.INTEGER
        },
        movie_id: {
          allowNull: false,
          type: Sequelize.INTEGER,
          foreignKey: true
        }
      });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('mov-genr');
  }
};