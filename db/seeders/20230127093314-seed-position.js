'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('positions', [{
      position_name: 'Director',
      describes: 'Thang nao lam giam doc la lam bo',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      position_name: 'Manager',
      describes: 'Duoi 1 thang tren van thang',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      position_name: 'Staff',
      describes: 'Nhan vien',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      position_name: 'Housekeeper',
      describes: 'Tap vu',
      createdAt: new Date(),
      updatedAt: new Date()
    }
    ])
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('positions', null, {});
  }
};
