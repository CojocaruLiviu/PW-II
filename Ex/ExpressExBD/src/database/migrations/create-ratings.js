'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ratings',
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        user_id: {
          allowNull: false,
          type: Sequelize.INTEGER,
          foreignKey:true,
          // references: {
          //   model: 'users',
          //   key: 'id'
          // }
        },
        movie_id: {
          type: Sequelize.STRING(50),
          foreignKey:true,
          // references: {
          //   model: 'movies',
          //   key: 'id'
          // }
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