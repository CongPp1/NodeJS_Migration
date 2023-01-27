const { Op, where } = require('sequelize');
const { sequelize } = require('../models');
const model = require('../models/index');
const Joi = require('joi');
const position = require('../models/position');

const getAllEmployees = async (query) => {
    const { name = '' } = query;
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
    const data = await model.employee.findAll({
        //Sắp xếp theo thứ tự tăng dần của id:
        order: [
            ['id', 'ASC']
        ],
        include: [
            { model: model.position }
        ],
        where: {
            [Op.and]: condition
        }
    });
    return { data };
}

const getAllEmployeesByPositionId = async (position_id) => {
    const data2 = await model.employee.findAll({
        where: { position_id },
        include: [
            { model: model.position }
        ],
        order: [
            ['employee_name', 'DESC']
        ]
    });
    return { data2 }
}

const getEmployeeById = async (id) => {
    const detail = await model.employee.findOne({ where: { id }, });
    return { detail };
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
    getAllEmployeesByPositionId,
    getEmployeeById,
    updateEmployeeBiId,
    addNewEmployee,
    deleteEmployee,
}