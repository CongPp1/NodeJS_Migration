const express = require('express');
const departmentRoutes = require('./api/department-route');
const employeeRoutes = require('./api/user-route')
const router = express.Router();

router.use('/departments', departmentRoutes);
router.use('/employee', employeeRoutes);

module.exports = router;