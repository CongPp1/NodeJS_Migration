'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('employees', [{
      employee_name: 'Ngo Ba Kha',
      birthday: new Date(),
      employee_position: 'Director',
      entry_date: new Date(),
      email: 'khabanh1993@gmail.com',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      employee_name: 'Duong Minh Tuyen',
      birthday: new Date(),
      employee_position: 'Manager',
      entry_date: new Date(),
      email: 'tuyenbeo@gmail.com',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      employee_name: 'Le Van Phu',
      birthday: new Date(),
      employee_position: 'Staff',
      entry_date: new Date(),
      email: 'phulevan@gmail.com',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      employee_name: 'Nguyen Van Hoi',
      birthday: new Date(),
      employee_position: 'Staff',
      entry_date: new Date(),
      email: 'khanhsky@gmail.com',
      createdAt: new Date(),
      updatedAt: new Date()
    }
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('employees', null, {});
  }
};
