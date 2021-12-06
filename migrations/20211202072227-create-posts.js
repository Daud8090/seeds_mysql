'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Posts', {
      posts_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      // user_id: {
      //   type: Sequelize.INTEGER,
      //   references: {
      //     model: {
      //       tableName: 'Users',
      //     },
      //     key: 'user_id',
      //   },
      //   allowNull: false,
      //   onDelete: 'CASCADE',
      // },
      message: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DataTypes.DATE,
        defaultValue: Sequelize.fn('now')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DataTypes.DATE,
        defaultValue: Sequelize.fn('now')
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Posts');
  }
};