const { DataTypes } = require("sequelize");
const { sequelize } = require(".");

module.exports = (sequelize, dataTypes) => {
    let alias = 'Producto'
    let cols = {
id: {
    type: dataTypes.BIGINT(10).UNSIGNED,
    primaryKey: true,
    allowNull: false, 
    autoIncrement: true
},
name: {
    type: dataTypes.VARCHAR(20),
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
    type: dataTypes.INT,
    allowNull: false
}
    }
    let config = {
    tableName: 'products',
    timeStamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    deletedAt: false    
    }
    const Producto = sequelize.define(alias, cols, config)

    return Producto
}
