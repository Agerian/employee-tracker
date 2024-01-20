-- Insert data into department table --
INSERT INTO department (id, name) VALUES
(1, 'Sales'),
(2, 'Engineering'),
(3, 'Finance'),
(4, 'Legal');

-- Insert data into role table --
INSERT INTO role (id, title, salary, department_id) VALUES
(1, 'Sales Lead', 100000, 1),
(2, 'Salesperson', 80000, 1),
(3, 'Lead Engineer', 150000, 2),
(4, 'Software Engineer', 120000, 2),
(5, 'Accountant', 125000, 3),
(6, 'Legal Team Lead', 250000, 4),
(7, 'Lawyer', 190000, 4);

-- Insert data into employee table --
INSERT INTO employee (id, first_name, last_name, role_id, manager_id) VALUES
(1, 'John', 'Doe', 1, NULL),
(2, 'Mike', 'Chan', 2, 1),
(3, 'Ashley', 'Rodriguez', 3, NULL),
(4, 'Kevin', 'Tupik', 4, 3),
(5, 'Malia', 'Brown', 5, NULL),
(6, 'Sarah', 'Lourd', 6, NULL),
(7, 'Tom', 'Allen', 7, 6),
(8, 'Sam', 'Carter', 4, 3),
(9, 'Hannah', 'Montana', 2, 1),
(10, 'John', 'Snow', 3, NULL),
(11, 'Daenerys', 'Targaryen', 3, NULL),
(12, 'Cersei', 'Lannister', 6, NULL),
(13, 'Tyrion', 'Lannister', 7, 12),
(14, 'Jon', 'Stark', 4, NULL),
(15, 'Sansa', 'Stark', 5, 14),
(16, 'Arya', 'Stark', 5, 14),
(17, 'Bran', 'Stark', 2, 14),
(18, 'Jaime', 'Lannister', 4, NULL),
(19, 'Theon', 'Greyjoy', 4, NULL),
(20, 'Samwell', 'Tarly', 4, NULL),
(21, 'Jorah', 'Mormont', 4, NULL),
(22, 'Sandor', 'Clegane', 4, NULL),
(23, 'Melisandre', NULL, 7, NULL),
(24, 'Bronn', NULL, 7, NULL),
(25, 'Varys', NULL, 7, NULL);