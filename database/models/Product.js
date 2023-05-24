module.exports = (sequelize, dataTypes) => {
    let alias = 'Product'
    let cols = {
        id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        name: {
            type: dataTypes.TEXT(20),
            allowNull: false
        },
        description: {
            type: dataTypes.TEXT(100),
            allowNull: false
        },
        image: {
            type: dataTypes.TEXT,
            allowNull: false
        },
        price: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        products_categories_id: {
            type: dataTypes.INTEGER
        },
        
    }
    let config = {
        timestamps: false,
       
       
    }
    const Product = sequelize.define(alias, cols);
   Product.associate = (models)=>{
        Product.belongsTo(models.Category, {
            as : 'product_category',
            foreignKey : 'products_categories_id'
        })
    }
    

    
    return Product
}
