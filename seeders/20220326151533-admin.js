'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('users', [{
      fullname: 'admin',
      email: 'admin@gmail.com',
      phone: '08817083978',
      role: 1,
      isactive: 1,
      password: '$2a$10$x2IvSW5vasREQx.lefbCCO794JDZOuPxSfVp93iOwpnvEa9IYxmju',
    }], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
