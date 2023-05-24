module.exports = (sequelize, dataTypes) => {
    let alias = 'Category'
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
        }
    }
    let config = {
        timestamps: false,
        
    }
    const Category = sequelize.define(alias, cols, config);


    return Category;
}
