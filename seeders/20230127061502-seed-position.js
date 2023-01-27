'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('positions', [{
      position_name: 'Director',
      describes: 'Thằng nào làm giám đốc là thằng đấy làm bố',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      position_name: 'Manager',
      describes: 'Dưới 1 thằng trên vạn thằng',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      position_name: 'Staff',
      describes: 'Nhân viên',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      position_name: 'Housekeeper',
      describes: 'Tạp vụ',
      createdAt: new Date(),
      updatedAt: new Date()
    }
    ])
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('positions', null, {});
  }
};
