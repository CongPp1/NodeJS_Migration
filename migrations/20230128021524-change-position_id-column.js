'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.addConstraint('employees', {
          fields: ['position_id'],
          type: 'foreign key',
          name: 'custom_fkey_constraint_name',
          references: {
            table: 'positions',
            field: 'id'
          }
        }, { transaction: t })
      ])
    })
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.removeConstraint('employees', 'custom_fkey_constraint_name', { 
          field: ['position_id'],
          transaction: t })
      ])
    })
  }
};
