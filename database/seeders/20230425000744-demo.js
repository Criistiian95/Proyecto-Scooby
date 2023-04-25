'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
    
      await queryInterface.bulkInsert('users', [{
        name: 'John Doe',
        last_name:'fernandez',
        email: 'neay@hotmail.com'
      }], {});
    
  },

  async down (queryInterface, Sequelize) {
    
      
      await queryInterface.bulkDelete('users', null, {});
    
  }
};
