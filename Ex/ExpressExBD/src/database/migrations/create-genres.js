'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('genres',
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
      }
      // ,{
      //   indexes: [
      //     {
      //       unique: true,
      //       fields: ['name', 'movyId']
      //     }
      //   ]
      // }
      );
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('genres');
  }
};