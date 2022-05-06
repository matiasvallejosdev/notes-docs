
/* 
--- Unit 1 ---
TABLES & DATABASE BASICS
*/ 

SHOW DATABASES;

CREATE DATABASE matias_sqlfundamentalscourse;
USE matias_sqlfundamentalscourse;

SHOW TABLES;
DESCRIBE employees; 

DROP TABLE customers;

CREATE TABLE employees(
	id int(4) NOT NULL,
    e_name varchar(300),
    e_wage float(5,2),
    hire_date date,
    PRIMARY KEY(id)
);

CREATE TABLE projects_employees(
	employee_id int(4) NOT NULL,
    project_id int(4) NOT NULL,
    hours float(5,2),
	PRIMARY KEY (employee_id, project_id),
	FOREIGN KEY (employee_id) REFERENCES employees(id),
    FOREIGN KEY (project_id) REFERENCES projects(id)
);

CREATE TABLE job_orders(
	id int(4) NOT NULL,
    employee_id int(4) NOT NULL,
    project_id int(4) NOT NULL,
    description VARCHAR(300),
	order_datetime TIMESTAMP,
    quantity int (6),
    price FLOAT(6,2),
    PRIMARY KEY(id),
	FOREIGN KEY (employee_id) REFERENCES employees(id),
    FOREIGN KEY (project_id) REFERENCES projects(id)
);

CREATE TABLE projects(
	id int(4) NOT NULL,
    name int(4) NOT NULL,
    value float(5,2),
    start_date date,
	end_date date,
    PRIMARY KEY (id)
);

CREATE TABLE customers(
	id int(4) NOT NULL auto_increment,
    company_name VARCHAR(300),
    industry VARCHAR(300),
    PRIMARY KEY (id)
);
