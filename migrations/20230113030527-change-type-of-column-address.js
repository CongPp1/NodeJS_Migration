'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.changeColumn('employees', 'address', {
          type: Sequelize.DATE,
          allowNull: true
        }, { transaction: t })
      ]);
    });
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.changeColumn('employees', 'address',{
          type: Sequelize.STRING,
          allowNull: false
        }, { transaction: t })
      ])
    })
  }
};
