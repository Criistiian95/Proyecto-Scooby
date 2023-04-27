'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable("users", {
      id: {
        type: Sequelize.INTEGER,
        AutoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      last_name: {
        type: Sequelize.TEXT,
        allowNull: false,
      }, 
      email: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      password: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      birth_date: {
        type: Sequelize.DATE
      },
      tel: {
        type: Sequelize.INTEGER
      },
      country: {
        type: Sequelize.TEXT
      },
      province: {
        type: Sequelize.TEXT
      },
      city: {
        type: Sequelize.TEXT
      },
      postal_code: {
        type: Sequelize.TEXT
      },
      street: {
        type: Sequelize.TEXT
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
	await queryInterface.dropTable("users");
  }
};


