'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('coments',
      {
        user_id: {
          allowNull: false,
        //   autoIncrement: true,
          foreignKey: true,
          type: Sequelize.INTEGER
        },
        movie_id: {
          type: Sequelize.INTEGER,
          foreignKey: true
        },
        movie_coment:{
            type: Sequelize.STRING(250)
        }
      });},
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('coments');
  }
};