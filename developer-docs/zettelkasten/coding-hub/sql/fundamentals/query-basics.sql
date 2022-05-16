/* Query Basic */
USE helloworld;
DESCRIBE users;
DESCRIBE posts;

-- Create some users
INSERT INTO users VALUES (6, "Natalia Hernan", 0, 3);
INSERT INTO users
VALUES 	(1, "Matias Vallejos", 1000, 6),
		(2, "Olga Meyer", 1150, 1),
        (3, "Abelardo Salvio", 2500, 5),
        (4, "Jesus Henry", 1000, 2),
        (5, "Lucas Segurola", 3500, 1);
        
-- Create some posts
INSERT INTO posts
VALUES 	(1, Now(), 0, 1),
		(2, Now(), 150, 1),
        (3, Now(), 10, 2),
        (4, Now(), 100, 2),
        (5, Now(), 20, 2),
        (6, Now(), 1000, 3),
        (7, Now(), 10000, 3),
        (8, Now(), 255, 4),
        (9, Now(), 120, 5);

-- Select Limit
-- That limit values returned by the query
SELECT *
FROM users LIMIT 1;

-- Select by Conditionals
-- That compare the salary and return if the condition is true
-- You could use operators to find data
/*
	>, <, =, <=, >=
    AND, OR, !=, !, BETWEEN, LIKE '%gmail.com'
*/
SELECT * FROM users WHERE salary > 1500;

SELECT * FROM users WHERE companyId = 1 AND salary < 2000;

SELECT * FROM users WHERE salary BETWEEN 1000 AND 2500;

SELECT * FROM users WHERE companyId != 1;

SELECT * FROM users WHERE name LIKE '%M%';

UPDATE users SET salary=null WHERE id = 6;
SELECT name as 'Name', COALESCE(salary, 0) as 'Salary' FROM users;

-- Select with Order
-- That order the table returned by a column
SELECT * FROM users ORDER BY salary DESC;
SELECT * FROM users ORDER BY salary ASC;

-- Select with Max or Min
-- That select the maximum value given a column
SELECT max(salary) as 'Max Salary' FROM users;
SELECT min(salary) as 'Min Salary' FROM users;

-- Select only few columns
-- That select values with specific columns with an alias.
SELECT id as 'User Id', likes as 'Posts Likes' FROM posts;

        
	

