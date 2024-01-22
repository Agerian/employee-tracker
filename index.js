require('dotenv').config();
const mysql = require('mysql2');
const inquirer = require('inquirer');

// Connect to database
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
},
console.log(`Connected to the ${process.env.DB_NAME} database.`));

// Function to view all departments
function viewAllRoles() {
    db.query('SELECT * FROM department', function (err, results) {
        console.log(results);
    });
};

// Function to view all roles
function viewAllRoles() {
    db.query('SELECT * FROM role', function (err, results) {
        console.log(results);
    });
};

// Function to view all employees
function viewAllEmployees() {
    db.query('SELECT * FROM employee', function (err, results) {
        console.log(results);
    });
};

// Function to add a department
function addDepartment() {
    inquirer
        .prompt({
            name: 'departmentName',
            type: 'input',
            message: 'What is the name of the department you would like to add?'
        })
        .then(function (answer) {
            db.query(
                'INSERT INTO department SET ?', 
                { 
                    name: answer.departmentName 
                },
                function (err, results) {
                    console.log(results);
                }
            );
        });
};

// Function to add a role
function addRole() {
    .prompt([
        {
            name: 'title',
            type: 'input',
            message: 'Enter the title of the new role:',
        },
        {
            name: 'salary',
            type: 'input',
            message: 'Enter the salary for the new role:',
        },
        {
            name: 'departmentId',
            type: 'input',
            message: 'Enter the department ID for the new role:',
        }
    ])
    .then(function (answer) {
        db.query(
            'INSERT INTO role SET ?',
            {
                title: answer.title,
                salary: answer.salary,
                department_id: answer.departmentId
            },
            function (err, results) {
                console.log(results);
            }
        );
    });
};

// Function to add an employee
function addEmployee() {
    inquirer
        .prompt([
            {
                name: 'firstName',
                type: 'input',
                message: 'Enter the first name of the new employee:',
            },
            {
                name: 'lastName',
                type: 'input',
                message: 'Enter the last name of the new employee:',
            },
            {
                name: 'roleId',
                type: 'input',
                message: 'Enter the role ID for the new employee:',
            },
            {
                name: 'managerId',
                type: 'input',
                message: 'Enter the manager ID for the new employee:',
            }
        ])
        .then(function (answer) {
            db.query(
                'INSERT INTO employee SET ?',
                {
                    first_name: answer.firstName,
                    last_name: answer.lastName, 
                    role_id: answer.roleId,
                    manager_id: answer.managerId
                },
                function (err, results) {
                    console.log(results);
                }
            );
        });
};

// Function to update an employee role
function updateEmployeeRole() {
    inquirer
        .prompt([
            {
                name: 'employeeId',
                type: 'input',
                message: 'Enter the ID of the employee you would like to update:',
            },
            {
                name: 'roleId',
                type: 'input',
                message: 'Enter the new role ID for the employee:',
            }
        ])
        .then(function (answer) {
            db.query(
                'UPDATE employee SET role_id = ? WHERE id = ?',
                [
                    answer.roleId, answer.employeeId
                ],
                function (err, results) {
                    console.log(results);
                }
            );
        });
};

// Function to view employees by manager
function viewEmployeesByManager() {
    inquirer
        .prompt([
            {
                name: 'managerId',
                type: 'input',
                message: 'Enter the ID of the manager whose employees you would like to view:',
            }
        ])
        .then(function (answer) {
            db.query(
                'SELECT * FROM employee WHERE manager_id = ?',
                [
                    answer.managerId
                ],
                function (err, results) {
                    console.log(results);
                }
            );
        });
};

// Function to view employees by department
function viewEmployeesByDepartment() {
    inquirer
        .prompt([
            {
                name: 'departmentId',
                type: 'input',
                message: 'Enter department ID to view employees:',
            }
        ])
        .then(function (answer) {
            db.query(
                'SELECT * FROM employee WHERE department_id = ?',
                [
                    answer.departmentId
                ],
                function (err, results) {
                    console.log(results);
                }
            );
        });
};

// Function to delete a department
function deleteDepartment() {
    inquirer
        .prompt([
            {
                name: 'departmentId',
                type: 'input',
                message: 'Enter the ID of the department you would like to delete:',
            }
        ])
        .then(function (answer) {
            db.query(
                'DELETE FROM department WHERE id = ?',
                [
                    answer.departmentId
                ],
                function (err, results) {
                    console.log(results);
                }
            );
        });
};

// Function to delete a role
function deleteRole() {
    inquirer
        .prompt([
            {
                name: 'roleId',
                type: 'input',
                message: 'Enter the ID of the role you would like to delete:',
            }
        ])
        .then(function (answer) {
            db.query(
                'DELETE FROM role WHERE id = ?',
                [
                    answer.roleId
                ],
                function (err, results) {
                    console.log(results);
                }
            );
        });
};

// Function to delete an employee
function deleteEmployee() {
    inquirer
        .prompt([
            {
                name: 'employeeId',
                type: 'input',
                message: 'Enter the ID of the employee you would like to delete:',
            }
        ])
        .then(function (answer) {
            db.query(
                'DELETE FROM employee WHERE id = ?',
                [
                    answer.employeeId
                ],
                function (err, results) {
                    console.log(results);
                }
            );
        });
};

// Function to view the total utilized budget of a department
function viewDepartmentBudget() {
    inquirer
        .prompt([
            {
                name: 'departmentId',
                type: 'input',
                message: 'Enter the ID of the department to view the budget:'
            }
        ])
        .then(function (answer) {
            db.query(
                'SELECT SUM(salary) AS total_budget FROM employee JOIN role ON employee.role_id = role.id WHERE role.department_id = ?',
                [
                    answer.departmentId
                ] ,
                function (err, results) {
                    console.log(results);
                }
            );
        });
};

