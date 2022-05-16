/* 
UNIT 4:
QUERY BASICS 
*/

USE matias_sqlfundamentalscourse;

SELECT P.name AS "Project Name",
       SUM(J_O.quantity) AS "Job Order Quantity",
       SUM(J_O.price) AS "Job Order Price",
       SUM(J_O.price * J_O.quantity) AS "Cost"
FROM job_orders J_O
JOIN projects P ON J_O.project_id = P.id
GROUP BY P.name;

SELECT p.NAME                           AS 'Project Name', 
       Sum(jo.quantity)                 AS 'Job Order Quantity', 
       Sum(jo.price)                    AS 'Job Order Price', 
       Sum(jo.quantity) * Sum(jo.price) AS 'Cost' 
FROM   projects p 
       JOIN job_orders jo 
         ON p.id = jo.project_id 
GROUP  BY 1;

/*Este es un ejemplo de una consulta que utiliza , JOIN, WHERE, GROUP BY, HAVING, ORDER BY, y LIMIT:*/
SELECT p.name,
       SUM(pe.hours) AS project_hours
FROM   projects_employees pe
JOIN   projects p ON p.id = pe.project_id
WHERE  p.name LIKE '%Ave%'
GROUP BY 1
HAVING project_hours > 3000
ORDER BY 2 DESC
LIMIT 1; 

SELECT p.name AS "Project Name",
       e.first_name AS "First Name",
       e.last_name AS "Last Name",
       SUM(jo.price) * SUM(jo.quantity) AS Spending
FROM   projects p
JOIN   job_orders jo ON p.id = jo.project_id
JOIN   employees e ON e.id = jo.employee_id
WHERE  p.name IN ('Central Valley Hospital', 'Big Money Bank')
GROUP BY 1,
         2,
         3
HAVING Spending > 10000000
ORDER BY Spending DESC;

