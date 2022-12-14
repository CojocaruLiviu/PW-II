'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('movies',
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        name: {
          type: Sequelize.STRING(50),
          allowNull: false
        },
        year: {
          type: Sequelize.FLOAT(4),
        },
        time: {
          type: Sequelize.FLOAT(2.2)
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE,
          defaultValue: Sequelize.literal('NOW()')
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE,
          defaultValue: Sequelize.literal('NOW()')
        }
      });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('movies');
  }
};