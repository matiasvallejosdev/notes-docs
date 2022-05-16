/* Query Intermediate */
USE helloworld;
DESCRIBE users;
DESCRIBE posts;
DESCRIBE company;

-- Query using joins and subqueries
-- That left join the users table with the posts table
/*
This query select users and relation it with left join
to the table posts and use it to count with SUM the quantity of posts
of that user.
*/
SELECT u.id as 'Id', u.name as 'Name', SUM(p.idUser = u.id)
FROM users u
LEFT JOIN posts p ON u.id = p.idUser
GROUP BY u.name;

-- That right join return users posts given a id
/* 
Given a user the query shows all the user's posts.
It's useful to use right join, because if you dont' have
any post the value of the query will be null otherwise
if you have left join the query will return a user null
because the user exists.
*/
SELECT u.id as 'Id', p.postDate as 'Date', p.likes as 'Likes'
FROM users u
RIGHT JOIN posts p ON u.id = p.idUser
WHERE u.id = 3;

/* 
Count how many users every
company has.
*/
SELECT c.id as 'Id', c.name as 'Company', coalesce(SUM(u.companyId = c.id), 0) as 'Total'
FROM company c
LEFT JOIN users u ON c.id = u.companyId
GROUP BY c.id;

-- That inner join return every user post
SELECT u.id as 'Id', u.name as 'Name', p.postDate as 'Date', p.likes as 'Likes'
FROM users u
INNER JOIN posts p ON u.id = p.idUser;

-- That group by posts by user and count them
/*
Because the query is grouped by users id
count operation will count how many posts
the users has
*/
SELECT u.name as 'Name', COUNT(p.id) as 'Posts' 
FROM users u
LEFT JOIN posts p ON u.id = p.idUser
GROUP BY u.id
HAVING Posts > 0; -- That filter the users with posts only show users with posts > 0