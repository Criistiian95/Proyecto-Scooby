'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up (queryInterface, Sequelize) {
      await queryInterface.createTable("products", {
        id: {
          type: Sequelize.INTEGER,
          AutoIncrement: true,
          primaryKey: true,
        },
        name: {
          type: Sequelize.TEXT,
          allowNull: false,
        },
       description: {
          type: Sequelize.TEXT,
          allowNull: false,
        }, 
        image: {
          type: Sequelize.TEXT,
          allowNull: false
        },
        price: {
          type: Sequelize.TEXT,
          allowNull: false
        }
      })
    },
  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable('users');
  }
};
