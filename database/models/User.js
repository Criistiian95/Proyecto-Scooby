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
      number: {
          type: dataTypes.INTEGER,
          allowNull: false
        },
    };
    let config = {
      tableName: "users",
      timestamps: true,
      createdAt: "created_at",
      updatedAt: "updated_at",
    };
    const User = sequelize.define(alias, cols, config);
  
    return User;
  };