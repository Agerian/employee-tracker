# Employee Tracker

## Description

This command-line application allows users to manage a company's employee database using Node.js, Inquirer, and MySQL. Users can view and manage departments, roles, and employees, oranize business information, and perform various database operations.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Database Schema](#database-schema)
- [License](#license)
- [Questions](#questions)

## Installation

1. Clone the repo to your local machine.
2. Navigate to the project's root directory.
3. Install the required depencies using the following command: <npm install>.

## Usage

Run the application with the following command: <node index.js>
Follow the prompts to perform actions such as viewing departments, roles, and employees, adding departments, roles, and employees, and updating employee roles.

## Database Schema

The application uses the following database schema:

-department

id: INT PRIMARY KEY
name: VARCHAR(30) to hold department name

-role

id: INT PRIMARY KEY
title: VARCHAR(30) to hold role title
salary: DECIMAL to hold role salary
department_id: INT to hold reference to department role belongs to

-employee

id: INT PRIMARY KEY
first_name: VARCHAR(30) to hold employee first name
last_name: VARCHAR(30) to hold employee last name
role_id: INT to hold reference to employee role
manager_id: INT to hold reference to another employee that is the manager of the current employee (null if the employee has no manager)

## License

[![MIT License License](https://img.shields.io/badge/license-MIT%20License-green)](https://opensource.org/licenses/MIT%20License)

## Questions

- GitHub: [Agerian](https://github.com/Agerian)
- Email: ezereading@gmail.com    

