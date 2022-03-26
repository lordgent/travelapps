'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('users', [{
      fullname: 'admin',
      email: 'admin@gmail.com',
      phone: '08817083978',
      role: 1,
      password: '$2a$10$RLORhiJdvmLCghj8YpM7deZBUOv/iREtJwBXPmIYiUsvM1h0UGL82',
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
