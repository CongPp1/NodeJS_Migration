'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.addConstraint('employees', {
          fields: ['department_id'],
          type: 'foreign key',
          name: 'department_fkey_constraint_name',
          references: {
            table: 'departments',
            field: 'id'
          }
        }, { transaction: t })
      ])
    })
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.removeConstraint('employees', 'department_fkey_constraint_name', {
          field: ['department_id'],
          transaction: t
        })
      ])
    })
  }
};
