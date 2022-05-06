/* 
UNIT 3:
DATA INSERT 
*/

USE matias_sqlfundamentalscourse;

DESCRIBE employees;

INSERT INTO employees (id, e_name, hourly_wage, hire_date) 
VALUES (1, 'Matias Vallejos', 21.5, '2018-01-13');

INSERT INTO employees (id, e_name, hourly_wage, hire_date) 
VALUES (2, 'Noeli Vallejos', 21.5, '2018-01-13'),
		(3, 'Abelardo Vallejos', 21.5, '2018-01-13');
        
INSERT INTO employees
VALUES (4, 'Emanuel Vallejos', 21.5, '2018-01-13'),
		(5, 'Olga Meyer', 21.5, '2018-01-13');

SELECT *
FROM employees
ORDER BY id DESC;

/* En la lección anterior, ayudó a Codey's Construction a crear una tabla de customers para almacenar los datos de sus clientes. Seguiremos utilizando esta tabla para practicar la inserción de datos (DESCRIBEla estructura de la tabla si no lo recuerdas!)*/

DESCRIBE customers;

/* Prepare db*/
INSERT INTO contact_persons
VALUES (1, 'Mati', 'Piloto', '349231243'),
	   (2, 'Abel', 'Jugador', '349231243'),
	   (3, 'Noe', 'Alfil', '349231243'),
       (4, 'Ema', 'Diseñador', '349231243'),
       (5, 'Olga', 'Manager', '349231243');
       
INSERT INTO zips
VALUES ('01010', 'none'),
	   ('55555', 'none'),
       ('12345', 'none'),
       ('01011', 'none'),
       ('88888', 'none');

INSERT INTO customers
VALUES (1, 'Next University', 'Education', 000001, '1 Coding Lane', '01010'),
       (2, 'XYZ Health Center', 'Healthcare', 000002, '88 Hospital Avenue', '55555'),
       (3, 'ArchiTECHS', 'Architecture', 000003, '77 Tower Street', '12345'),
	   (4, 'DataAir', 'Transportation', 000004, '42 Base Rd', '01011'),
       (5, 'SQLRealty', 'Real Estate', 000005, '123 Sequel Highway', '88888');
       
SELECT *
FROM customers;

DESCRIBE projects;

ALTER TABLE projects
	MODIFY name VARCHAR(300);

SELECT *
FROM projects;

INSERT INTO projects
VALUES
	(1, 'East Ave Shermans Diner', 0, '2008-03-01', '2012-05-15'),
	(2, 'Big Money Bank', 0, '2012-02-15', '2015-09-01'),
	(3, 'Central Valley Hospital', 0, '2013-12-01', '2017-09-15'),
	(4, 'Washington Avenue Barber', 0, '2015-07-01', '2020-08-01'),
	(5, 'Hamill, Berge and Adams Office', 0, '2018-01-01', '2024-12-01');
    

/*Codey's Construction ha decidido dar un aumento salarial a los empleados que han estado con la compañía durante mucho tiempo. Actualice el salario por hora de los empleados contratados en o antes de 2010-01-01 por una tarifa plana de $2/hr.*/

SELECT * FROM employees;
SET SQL_SAFE_UPDATES = 0;

UPDATE employees
SET
	hourly_wage = hourly_wage * 2
WHERE
	hire_date >= '2018-01-12';
UPDATE employees
SET
	hourly_wage = hourly_wage * 1.5
WHERE
	e_name LIKE '%Vallejos%';

INSERT INTO employees (id, e_name, hourly_wage, hire_date) 
VALUES (6, 'Noeli Alejo', 21.5, '2018-01-13');

DELETE FROM employees
WHERE
	id = 6;

