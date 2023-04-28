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
        imagen: {
            type: dataTypes.BLOB,
            allowNull: false
        },
        price: {
            type: dataTypes.INTEGER,
            allowNull: false
        }
    }
    let config = {
        tableName: 'Products',
        timestamps: false,
        deletedAt: false
    }
    const Product = sequelize.define(alias, cols, config);

    Product.associate = (models) => {
        User.belongsTo(models.Categories, {
            as: 'category',
            foreignKey: 'categories_id'
        });
        return Product
    }
}
