const departmentService = require('./department-service');
const Joi = require('Joi');

const getAll = async (req, res) => {
    try {
        const result = await departmentService.getAllDepartments(req.query);
        res.status(200).json(result);
    } catch (error) {
        console.log('err', error);
        res.status(404).json({ message: 'Data is empty', error });

    }
}

const getOneById = async(req, res) => {
    try {
        const result = await departmentService.getDepartmentById(req.params.id);
        res.status(200).json(result);
    } catch (error) {
        console.log('err', error);
        res.status(404).json({ message: 'Data is empty', error });
    }
}

const countAll = async(req, res) => {
    try {
        const result = await departmentService.countingAllEmpInEachDep();
        res.status(200).json(result);
    } catch (error) {
        console.log('err: ', error);
        res.status(500).json({message: 'Error!', error});
    }
}

const countingByDepartmentId = async(req, res) => {
    try {
        const result = await departmentService.countingEmployeesInDepartment(req.params.id);
        res.status(200).json(result);
    } catch (error) {
        console.log('err', error);
        res.status(500).json({message: 'Error!', error});
    }
}

const createNewDepartment = async(req, res) => {
    const schema = Joi.object().keys({
        department_name: Joi.string().required(),
        describes: Joi.string().required(),
        createdAt: Joi.date().required(),
        updatedAt: Joi.date().required()
    });
    const{error} = schema.validate(req.body);
    if(error){
        res.status(400).json({message: error.details[0].message});
    }
    try {
        const createResult = await departmentService.addNewDepartment(req.body);
        res.status(200).json({message: 'New Department has been created successfully', createResult});
    } catch (error) {
        console.log('err', error);
        res.status(500).json({message: 'Error creating new department', error});
    }
}

const updateById = async(req, res) => {
    try {
        const updateDep = await departmentService.updateDepartment(req.params.id, req.body);
        if(updateDep){
            const updateResult = departmentService.getDepartmentById(req.params.id);
            res.status(200).json({message: 'New Department has been updated successfully', updateResult});
        }
    } catch (error) {
        console.log('err', error);
        res.status(500).json({message: 'Error updating new department', error});
    }
}

const deleteById = async(req, res) => {
    try {
        const result = await departmentService.deleteDepartment(req.params.id);
        res.status(200).json({message: 'New Department has been deleted successfully'})
    } catch (error) {
        res.status(500).json({message: 'Error updating new department', error})
    }
}

module.exports = {
    getAll,
    getOneById,
    countAll,
    countingByDepartmentId,
    createNewDepartment,
    updateById,
    deleteById
}