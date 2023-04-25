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
      nombre: {
        type: Sequelize.STRING(45),
      },
      descripcion: {
        type: Sequelize.TEXT,
      },
      imagen: {
        type: Sequelize.TEXT,
      },
      precio: {
        type: Sequelize.DECIMAL(11, 2),
      },
    });
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable("products");
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
