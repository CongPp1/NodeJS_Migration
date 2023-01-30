'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.addColumn('employees', 'department_id', {
          type: Sequelize.INTEGER
        }, {transaction: t})
      ])
    })
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.removeColumn('employees', 'department_id', {transaction: t})
      ])
    })
  }
};
