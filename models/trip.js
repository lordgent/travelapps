'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class trip extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      trip.belongsTo(models.categories, {
        foreignKey: {
          name: 'idcategory'
        }
      })
      trip.hasMany(models.transaction, {
        as:'transactions',
        foreignKey: {
          name: 'idtrip'
        }
      })
    }
  }
  trip.init({
    title: DataTypes.STRING,
    photo: DataTypes.STRING,
    lat: DataTypes.INTEGER,
    long: DataTypes.INTEGER,
    country: DataTypes.STRING,
    price: DataTypes.STRING,
    accomodation: DataTypes.STRING,
    transpotation: DataTypes.STRING,
    duration: DataTypes.STRING,
    date_trip: DataTypes.DATE,
    idcategory: DataTypes.INTEGER,
    quota: DataTypes.INTEGER,
    avilable: DataTypes.INTEGER,
    sold: DataTypes.INTEGER,
    description: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'trip',
  });
  return trip;
};