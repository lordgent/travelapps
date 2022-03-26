'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('transactions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idtrip: {
        type: Sequelize.INTEGER,
        idcategory: {
          type: Sequelize.INTEGER,
          references: {
            model: "trips",
            key: "id",
          },
          onUpdate: "CASCADE",
          onDelete: "CASCADE",
        },
      },
      quota: {
        type: Sequelize.INTEGER
      },
      price: {
        type: Sequelize.STRING
      },
      subtotal: {
        type: Sequelize.STRING
      },
      kode: {
        type: Sequelize.STRING
      },
      payment: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('transactions');
  }
};