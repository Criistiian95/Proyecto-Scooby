module.exports = (sequelize, dataTypes) => {
    let alias = "User";
    let cols = {
      id: {
        type: dataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      name: {
        type: dataTypes.STRING(45),
        allowNull: false,
      },
      last_name: {
        type: dataTypes.STRING(45),
        allowNull: false,
      },
      email: {
        type: dataTypes.TEXT(100),
        unique: true,
        allowNull: false,
      },
      password: {
        type: dataTypes.TEXT,          
        allowNull: false,
      },
      birth_date: {
        type: dataTypes.DATE,
        allowNull: false,
      },
      tel: {
        type: dataTypes.INTEGER,
        allowNull: false,
      },
      country: {
        type: dataTypes.TEXT,
        allowNull: false,
      },
      province: {
        type: dataTypes.TEXT,
        allowNull: false,
      },
      city: {
        type: dataTypes.TEXT,
        allowNull: false,
      },
      postal_code: {
        type: dataTypes.INTEGER,
        allowNull: false,
      },
      street: {
        type: dataTypes.TEXT,
        allowNull: false,
      },
      roles_id:{
        type:dataTypes.INTEGER,
    }
}
    let config = {
        timestamps: false,  
    }
    const User = sequelize.define(alias, cols, config);
   User.associate = (models)=>{
        User.belongsTo(models.Role, {
            as : 'role',
            foreignKey : 'roles_id'
        })
    }
    return User;
  };