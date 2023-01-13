const express = require('express');
const userController = require('./user-controller');

const router = express.Router();

router.get('/', userController.getAll);
router.get('/:id', userController.getOneById);
router.put('/:id', userController.updateById);
router.post('/', userController.addEmployee);
router.delete('/:id', userController.deleteExistingEmployee);

module.exports = router;