'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('mov-genr',
      {
        genre_id: {
          allowNull: false,
          // autoIncrement: true,
          foreignKey: true,
          type: Sequelize.INTEGER,
          // references: {
          //   model: 'genre',
          //   key: 'id'
          // }
        },
        movie_id: {
          allowNull: false,
          type: Sequelize.INTEGER,
          foreignKey: true,
          //   references: {
          //   model: 'movie',
          //   key: 'id'
          // }
        }
      },
    );
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('mov-genr');
  }
};
