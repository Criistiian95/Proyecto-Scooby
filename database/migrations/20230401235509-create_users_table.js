'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.createTable("users", {
      id: {
        type: Sequelize.INTEGER,
        AutoIncrement: true,
        primaryKey: true,
      },
      nombre: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      apellido: {
        type: Sequelize.TEXT,
        allowNull: false,
      }, 
      email: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      contraseña: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      fecha_de_nacimiento: {
        type: Sequelize.DATE
      }
    });
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
