'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('genre',
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
        code: {
          type: Sequelize.STRING(2)
        },
        countryId: {
          type: Sequelize.INTEGER,
          references: {
            model: 'movies',
            key: 'id'
          }
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
        indexes: [
          {
            unique: true,
            fields: ['name', 'movyId']
          }
        ]
      });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('genre');
  }
};