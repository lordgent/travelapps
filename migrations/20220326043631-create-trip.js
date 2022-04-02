'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('trips', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      photo: {
        type: Sequelize.STRING
      },
      lat: {
        type: Sequelize.INTEGER
      },
      long: {
        type: Sequelize.INTEGER
      },
      country: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.STRING
      },
      idcategory: {
        type: Sequelize.INTEGER,
        references: {
          model: "categories",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      quota: {
        type: Sequelize.INTEGER
      },
      avilable: {
        type: Sequelize.INTEGER
      },
      sold: {
        type: Sequelize.INTEGER
      },
      accomodation: {
        type: Sequelize.STRING
      },
      transpotation: {
        type: Sequelize.STRING
      },
      duration: {
        type: Sequelize.STRING
      },
      date_trip: {
        type: Sequelize.DATE
      },
      description: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        defaultValue: Sequelize.fn("now"),
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        defaultValue: Sequelize.fn("now"),
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('trips');
  }
};