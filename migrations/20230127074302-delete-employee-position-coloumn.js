'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.sequelize.transaction(t => {
      return queryInterface.removeColumn('employees', 'employee_position', {transaction: t})
    })
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.sequelize.transaction(t => {
      return queryInterface.dropTable('employees', {transaction: t})
    })
  }
};
