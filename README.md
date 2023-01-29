

# Employee Controller
This module provides functions to get, add, update and delete employee data.

## Functions
* `getAll()` - Gets all employees.
* `getOneById()` - Gets an employee by their ID.
* `getAllByPositionId()` - Gets all employees by position ID.
* `updateById()` - Updates an employee by their ID.
* `addEmployee()` - Adds a new employee.
* `deleteExistingEmployee()` - Deletes an existing employee.

# Employee Service

This service provides a set of functions to manage employee data. It includes functions to get, add, update and delete employee data.

## Functions
- `getAllEmployees(query)`: Get a list of employees according to the query (name). 
- `getAllEmployeesByPositionId(position_id)`: Get a list of employees according to the position id. 
- `getEmployeeById(id)`: Get an employee by its id. 
- `updateEmployeeBiId(id, data)`: Update an employee by its id. 
- `addNewEmployee(data)`: Add a new employee. 
- `deleteEmployee(id)`: Delete an employee by its id.