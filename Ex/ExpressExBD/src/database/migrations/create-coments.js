'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('coments',
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        user_id: {
          allowNull: false,
        //   autoIncrement: true,
          foreignKey: true,
          type: Sequelize.INTEGER,
          // references: {
          //   model: 'User',
          //   key: 'id'
          // }
        },
        movie_id: {
          type: Sequelize.INTEGER,
          foreignKey: true,
          // references: {
          //   model: 'Movie',
          //   key: 'id'
          // }
        },
      
      }
      ,{
        indexes: [
          {
            unique: true,
            fields: ['userId', 'movieId']
          }
        ]
      }
      );},
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('coments');
  }
};