'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('employees', [{
      employee_name: 'Ngo Ba Kha',
      birthday: new Date(),
      position_id: 1,
      entry_date: new Date(),
      email: 'khabanh1993@gmail.com',
      address: 'Yen Bai',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      employee_name: 'Duong Minh Tuyen',
      birthday: new Date(),
      position_id: 2,
      entry_date: new Date(),
      email: 'tuyenbeo@gmail.com',
      address: 'Phu Tho',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      employee_name: 'Le Van Phu',
      birthday: new Date(),
      position_id: 3,
      entry_date: new Date(),
      email: 'phulevan@gmail.com',
      address: 'Thanh Hoa',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      employee_name: 'Nguyen Van Hoi',
      birthday: new Date(),
      position_id: 4,
      entry_date: new Date(),
      email: 'khanhsky@gmail.com',
      address: 'Nghe An',
      createdAt: new Date(),
      updatedAt: new Date()
    }
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('employees', null, {});
  }
};
