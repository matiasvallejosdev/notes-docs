/* 
UNIT 4:
QUERY BASICS 
*/

USE matias_sqlfundamentalscourse;

DESCRIBE employees;

SELECT id, e_name
FROM employees; 

SELECT 
	id AS 'ID Employee',
	e_name AS 'Name Employee'
FROM employees;

SELECT id, name AS 'Proyecto', start_date
FROM projects;

SELECT * 
FROM projects
WHERE name LIKE'%Bank%';

SELECT employee_id, hours
FROM projects_employees
WHERE project_id = 5 AND hours >= 800;

/*Todos los que empiezen con M%*/
SELECT e_name, hourly_wage 
FROM employees
WHERE 
  e_name LIKE'M%' AND
  hourly_wage >= 0;
  
SELECT *
FROM job_orders
WHERE quantity BETWEEN 100 AND 200
  AND price BETWEEN 1000 AND 1500
  AND description LIKE'%drill%';
  
SELECT name, 
       COALESCE(value, 500000) AS "value"
FROM projects
WHERE COALESCE(value, 500000) > 200000;


