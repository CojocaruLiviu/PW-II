'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ratings',
      {
        user_id: {
          allowNull: false,
          type: Sequelize.INTEGER,
          foreignKey:true
        },
        movie_id: {
          type: Sequelize.STRING(50),
          foreignKey:true
        },
        movie_like:{
            type: Sequelize.INTEGER
         
        },
        // code: {
        //   type: Sequelize.STRING(2)
        // },
        // movieId: {
        //   type: Sequelize.INTEGER,
        //   foreignKey: true
        // },
        // createdAt: {
        //   allowNull: false,
        //   type: Sequelize.DATE,
        //   defaultValue: Sequelize.literal('NOW()')
        // },
        // updatedAt: {
        //   allowNull: false,
        //   type: Sequelize.DATE,
        //   defaultValue: Sequelize.literal('NOW()')
        // }
      });},
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('ratings');
  }
};