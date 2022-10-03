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
        userId: {
          type: Sequelize.INTEGER,
          // references: {
          //   model: 'movies',
          //   key: 'id'
          // }
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
      },
      {
        // indexes: [
        //   {
        //     unique: true,
        //     fields: ['name', 'regionId']
        //   }
        // ]
      });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('genres');
  }
};