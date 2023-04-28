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
    /*let config = {
        tableName: 'Categories',
        timestamps: false,
        deletedAt: false
    };*/
    const Category = sequelize.define(alias, cols);
    /*Category.associate = (models)=>{
        Category.hasMany(models.Product, {
            as : 'products',
            foreignKey : 'categories_id'
        })
    }*/
    return Category;
}
