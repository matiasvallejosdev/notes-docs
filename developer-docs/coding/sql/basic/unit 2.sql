CREATE DATABASE matias_tech_shop

/* USE DATABASE */
USE matias_tech_shop;

/* DELETE DATABASE */
DROP TABLE Customers;

/* CREATE TABLE */
CREATE TABLE Customers
(
	id_customer char(5) PRIMARY KEY,
	first_name varchar(50),
    last_name varchar(50),
    home_address varchar(250),
    email varchar(200),
    phone varchar(200),
    notes varchar(250)
);

/* INSERT INTO CUSTOMERS MultiplesTimes */

INSERT INTO Customers(id_customer, first_name, last_name, home_address, email, phone, notes)
		VALUES('001a', 'Matias Vallejos', 'Abelardo', 'Los jacarandaes 1222', 'myemail@email.com','3492593341', 'None'),
		      ('002a', 'Olga Meyer', 'Nora', 'Las acacias 1222', 'myemail@email.com', '3492616194', 'None'),
              ('003a', 'Abelardo Vallejos', 'Elise', 'Las acacias 1222', 'myemail@email.com', '3492616444', 'None'),
              ('004a', 'Noeli Vallejos', 'Carolina', 'Las araucarias 1222', 'myemail@email.com', '3492616176', 'None');

/* QUERY DATABASE */
SELECT * From Customers
