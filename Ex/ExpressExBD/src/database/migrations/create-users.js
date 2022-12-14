'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('user',
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        username: {
          type: Sequelize.STRING(50)
        },
        password: {
          type: Sequelize.STRING(50)
        },
        roles: {
          type: Sequelize.STRING(50)
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE,
          defaultValue: Sequelize.literal('NOW()')
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE,
          defaultValuse: Sequelize.literal('NOW()')
        }
      },
      );
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('user');
  }
};