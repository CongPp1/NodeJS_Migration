'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.createTable('position', {
      position_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      describes: {
        type: Sequelize.STRING,
        allowNull: true
      }
    })
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.dropTable('position');
  }
};
