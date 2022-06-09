SHOW DATABASES;
CREATE DATABASE users;
USE users;

DROP TABLE city;
DROP TABLE user;

CREATE TABLE city(
	zip INT PRIMARY KEY AUTO_INCREMENT,
    city VARCHAR(60)
);

CREATE TABLE user(
	id INT PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(45),
    last_name VARCHAR(45),
    user VARCHAR(18) NOT NULL UNIQUE,
    email VARCHAR(60) NOT NULL UNIQUE,
    zip INT,
    CONSTRAINT fk_city FOREIGN KEY (zip)
    REFERENCES city(zip) 
);

INSERT INTO city
VALUES	(5000, 'Cordoba'),
		(2300, 'Rafaela');
        
INSERT INTO user
VALUES (1, 'Matias', 'Vallejos', 'mativallejos', 'mativallejos@outlook.com', 2300);

SELECT U.user, C.city
FROM user U
LEFT JOIN city as C ON U.zip = C.zip;

SHOW TABLES;