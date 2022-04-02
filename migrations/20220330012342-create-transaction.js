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
      fullname: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.STRING
      },
      ktp: {
        type: Sequelize.STRING
      },
      subtotal: {
        type: Sequelize.STRING
      },
      kode: {
        type: Sequelize.STRING
      },
      iduser: {
        type: Sequelize.INTEGER,
        references: {
          model: "users",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
      payment: {
        type: Sequelize.STRING
      },  
      payment_statusid: {
        type: Sequelize.INTEGER,
        references: {
          model: "paymentstatuses",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
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
