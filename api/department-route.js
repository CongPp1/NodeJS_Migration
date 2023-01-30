const express = require('express');
const departmentController = require('./department-controller');

const router = express.Router();

router.get('/', departmentController.getAll);
router.get('/:id', departmentController.getOneById);
router.get('/statistics/departments', departmentController.countAll);
router.get('/statistics/departments/:id', departmentController.countingByDepartmentId);
router.post('/', departmentController.createNewDepartment);
router.put('/:id', departmentController.updateById);
router.delete('/:id', departmentController.deleteById);

module.exports = router
