module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable("products", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
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
      },
      products_categories_id:{
        type:Sequelize.INTEGER,
        references:{
          model:"products_categories",
          key:"id"
        }
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
  await queryInterface.dropTable('products');
}
};