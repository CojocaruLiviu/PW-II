'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('types',
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
        regionId: {
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
            fields: ['name', 'genreId']
          }
        ]
      });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('types');
  }
};