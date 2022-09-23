'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('users',
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        name: {
          type: Sequelize.STRING(50)
        },
        // code: {
        //   type: Sequelize.STRING(2)
        // },
        // movieId: {
        //   type: Sequelize.INTEGER,
        //   foreignKey: true
        // },
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
      });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('users');
  }
};