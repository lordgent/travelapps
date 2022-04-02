'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class transaction extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      transaction.belongsTo(models.users, {
        foreignKey: {
          name: 'iduser'
        }
      })
      transaction.belongsTo(models.trip, {
        as:'trips',
        foreignKey: {
          name: 'idtrip'
        }
      })
    }
  }
  transaction.init({
    idtrip: DataTypes.INTEGER,
    quota: DataTypes.INTEGER,
    price: DataTypes.STRING,
    fullname: DataTypes.STRING,
    ktp: DataTypes.STRING,
    subtotal: DataTypes.STRING,
    iduser: DataTypes.INTEGER,
    kode: DataTypes.STRING,
    payment: DataTypes.STRING,
    payment_statusid: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'transaction',
  });
  return transaction;
};