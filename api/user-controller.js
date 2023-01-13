const employeeService = require('./user-service');
const Joi = require('Joi');

const getAll = async (req, res) => {
    try {
        const result = await employeeService.getAllEmployees(req.query);
        res.status(200).json(result);
    } catch (error) {
        res.status(404).json({ message: 'Data is empty', error });
    }
}

const getOneById = async (req, res) => {
    try {
        const detail = await employeeService.getEmployeeById(req.params.id);
        res.status(200).json(detail);
    } catch (error) {
        res.status(404).json({ message: 'Cannot find this employee', error });
    }
}

const updateById = async (req, res) => {
    try {
        const updateEmp = await employeeService.updateEmployeeBiId(req.params.id, req.body);
        if (updateEmp) {
            const updateResult = await employeeService.getEmployeeById(req.params.id);
            res.status(200).json({message: 'Employee has been updated successfully', updateResult});
        }
    } catch (error) {
        res.status(404).json({ message: 'Error updating employee', error });
    }
}

const addEmployee = async(req, res) => {
    const schema = Joi.object().keys({
        employee_name: Joi.string().required(),
        birthday: Joi.date().required(),
        employee_position: Joi.string().required(),
        address: Joi.string().required(),
        entry_date: Joi.date().required(),
        email: Joi.string().required().email({minDomainSegments: 2, tlds: {allow: ['com', 'net']}}),
        createdAt: Joi.date().required(),
        updatedAt: Joi.date().required()
    });
    const{error} = schema.validate(req.body);
    if(error){
        res.status(400).json({message: error.details[0].message});
    }
    try {
        const createResult = await employeeService.addNewEmployee(req.body);
        res.status(200).json({message: 'New Employee has been created successfully', createResult});
    } catch (error) {
        res.status(500).json({message: 'Error creating new employee', error});
    }
}

const deleteExistingEmployee = async(req, res) => {
    try {
        const deleteResult = await employeeService.deleteEmployee(req.params.id);
        res.status(200).json({message: 'Employee has been deleted successfully'});
    } catch (error) {
        res.status(400).json({message: 'Error deleting employee', error});
    }
}

module.exports = {
    getAll,
    getOneById,
    updateById,
    addEmployee,
    deleteExistingEmployee
}