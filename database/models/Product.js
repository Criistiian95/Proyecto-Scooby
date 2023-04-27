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
        tableName: 'products',
        timestamps: false,
        deletedAt: false
    }
    const Products = sequelize.define(alias, cols, config)

    return Products
}