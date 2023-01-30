const { Op, where } = require('sequelize');
const { sequelize } = require('../models');
const model = require('../models/index');
const Joi = require('joi');
const position = require('../models/position');

const getAllEmployees = async (query) => {
    const { name = '', page, limit, order } = query;
    const offset = (!page || page <= 1) ? 0 : (page - 1) * limit;
    let search = '';
    if (name) {
        search = name.toLowerCase();
    }
    // Tìm kiếm 1 list nhân viên theo tên viết hoa và viết thường:
    const condition = [{
        [Op.or]: [
            sequelize.where(sequelize.fn('LOWER', sequelize.col('employee_name')), 'LIKE', `%${search}%`),
        ]
    }]
    const toatalEmps = await model.employee.count({
        where: {
            [Op.and]: condition
        }
    })
    const data = await model.employee.findAll({
        offset,
        limit,
        order: [
            ['id', order]
        ],
        where: {
            [Op.and]: condition
        },
        include: [
            { model: model.position },
            { model: model.department }
        ]
    });
    return { data, pagination: { page: parseInt(page), limit: parseInt(limit), toatalEmps } };
}

const getAllEmployeesByPositionId = async (position_id) => {
    const data2 = await model.employee.findAll({
        where: { position_id },
        include: [
            { model: model.position },
            { model: model.department }
        ],
        order: [
            ['employee_name', 'ASC']
        ]
    });
    return data2;
}

const getAllEmployeesByDepartmentId = async (department_id) => {
    const totalEmps = await model.employee.count(
        {
            where: { department_id }
        });
    const data3 = await model.employee.findAll({
        where: { department_id },
        include: [
            { model: model.position },
            { model: model.department }
        ],
        order: [
            ['employee_name', 'ASC']
        ]
    });
    return { data3, pagination: { totalEmps } }
}

const getEmployeeById = async (id) => {
    const detail = await model.employee.findOne({
        where: { id },
        include: [
            { model: model.position }
        ]
    });
    return { detail };
}

const countingAllEmpInEachDep = async () => {
    const result = await model.employee.findAll({
        include: [
            {
                model: model.department,
                as: 'department',
                required: true
            }
        ],
        group: ['employee.department_id', 'department.id'],
        attributes: ['employee.department_id', [sequelize.fn('COUNT', sequelize.col('department.id')), 'Employee count']]
    });
    return { result };
}

const updateEmployeeBiId = async (id, data) => {
    const update = await model.employee.update(data, { where: { id } });
    return update;
}

const addNewEmployee = async (data) => {
    const add = await model.employee.create(data);
    return add;
}

const deleteEmployee = async (id) => {
    const deleteEmp = await model.employee.destroy({ where: { id } });
    return deleteEmp;
}

module.exports = {
    getAllEmployees,
    getEmployeeById,
    getAllEmployeesByPositionId,
    getAllEmployeesByDepartmentId,
    countingAllEmpInEachDep,
    updateEmployeeBiId,
    addNewEmployee,
    deleteEmployee,
}