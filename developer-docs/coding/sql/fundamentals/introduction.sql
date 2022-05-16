/* Databases Introduction */
create database helloworld;
show databases;
set sql_safe_updates = 0;

use helloworld;

-- Create tables
drop table if exists users;
create  table if not exists users (
    id int not null auto_increment, -- 1. Integer
    name varchar(255) not null,  -- 2. Varchar
    salary float not null, -- 3. Float
    companyId int not null,
    /* Create primary key and foreign key relations */
    primary key (id),
    foreign key (companyId) references company(id)
);

drop table if exists company;
create table if not exists company(
    id int not null auto_increment,
    name varchar(255) not null,
    primary key (id)
);

drop table if exists posts;
create table if not exists posts(
	id int not null auto_increment,
    postDate date,
    likes int,
    idUser int not null,
    primary key (id),
    foreign key (idUser) references users(id)
);

-- Rename Table
RENAME table users to users;

-- Alter table
ALTER TABLE company ADD COLUMN postCode varchar(4); 

-- Basic Create
insert into company (name, postCode)
values ("Merli", 9900);

-- Basic Create Multiple
insert into company (name, postCode)
values ("Google", 1600), ("Microsoft", 2000), ("Apple", 1000);

-- Basic Read without parameters
select * 
from company;

-- Basic Read with parameters
select *
from company
where name="Google"; -- and postCode=1600;

-- Basic Update
update company
set name="Salesforce"
where postCode=9900;

-- Basic Delete
delete from company 
where id = 10;

