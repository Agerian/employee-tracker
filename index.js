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
    
};

// Function to add a role
function addRole() {};

// Function to add an employee
function addEmployee() {};

// Function to update an employee role
function updateEmployeeRole() {};

// Quit the application
