'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    return queryInterface.bulkInsert('departments', [{
      department_name: 'IT',
      describes: 'Noi co nhieu nguoi dep zai nhat cong ty =))',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      department_name: 'HR',
      describes: 'Noi nhieu ban gai xinh nhat cong ty <3',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      department_name: 'Accountant',
      describes: 'Noi co nhieu ban gai xinh thu 2 cong ty <3',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      department_name: 'Security',
      describes: '.....',
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ])
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkInsert('departments', null, {});
  }
};
