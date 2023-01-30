const { Op, where } = require('sequelize');
const { sequelize } = require('../models');
const model = require('../models/index');
const Joi = require('joi');
const position = require('../models/position');

const getAllDepartments = async (query) => {
    const { page, name = '', order, limit } = query;
    const offset = (!page || page <= 1) ? 0 : (page - 1) * limit;
    let search = '';
    if (name) {
        search = name.toLowerCase();
    }
    const condition = [{
        [Op.or]: [
            sequelize.where(sequelize.fn('LOWER', sequelize.col('department_name')), 'LIKE', `%${search}%`)
        ]
    }]
    console.log('data',);
    const data = await model.department.findAll({
        where: {
            [Op.and]: condition,
        },
        include: [
            { model: model.employee },
        ],
        // order: [
        //     ['id', order]
        // ]
    });

    return { data, pagination: { page: parseInt(page) } };
}

const getDepartmentById = async (id) => {
    const result = await model.department.findOne({
        where: { id },
        include: [
            { model: model.employee },
        ]
    });
    return { result };
}

const countingEmployeesInDepartment = async (department_id) => {
    const result = await model.employee.count({
        where: { department_id }
    });
    return { result };
}

const addNewDepartment = async (data) => {
    const add = await model.department.create(data);
    return add;
}

const updateDepartment = async (id, data) => {
    const result = await model.department.update(data, { where: { id } });
    return result;
}

const deleteDepartment = async (id) => {
    const result = await model.department.destroy({ where: { id } });
    return result;
}

module.exports = {
    getAllDepartments,
    getDepartmentById,
    countingEmployeesInDepartment,
    addNewDepartment,
    updateDepartment,
    deleteDepartment
}