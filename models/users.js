'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      users.hasMany(models.transaction, {
        as:'transactions',
        foreignKey: {
          name: 'iduser'
        }
      })
    }
  }
  users.init({
    fullname: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    address: DataTypes.STRING,
    role: DataTypes.INTEGER,
    photo: DataTypes.STRING,
    password: DataTypes.STRING,
    otp: DataTypes.INTEGER,
    isactive: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'users',
  });
  return users;
};