# SQL Databases

**Useful links**

- [Playlist SQL](https://www.youtube.com/playlist?list=PLOG7JkQSkBqZlbtpO1CsP-2wm9wu4LEKc)

## Guide

- [SQL Databases](#sql-databases)
  - [Guide](#guide)
  - [Databases Theory](#databases-theory)
  - [Database SQL](#database-sql)
    - [Database Relations](#database-relations)
  - [SQL Language](#sql-language)
    - [SQL Joins](#sql-joins)
  - [How to design a database?](#how-to-design-a-database)
    - [What is the entity relation model?](#what-is-the-entity-relation-model)
    - [Database Normalization](#database-normalization)
      - [First Normal Form](#first-normal-form)
      - [Second Normal Form](#second-normal-form)
      - [Third Normal Form](#third-normal-form)


## Databases Theory

A database is the collection of data that is stored. It is a collection of tables related to each other.

- Memory
- Task lists
- Paper and pencil
- Computers
  - Relational Databases
    - MySQL
    - PostgreSQL
    - Sql Server
    - Oracle
    - MariaDB
  - [Non-Relational Databases](../no-sql/no-sql.md)
    - MongoDB
    - DynamoDB

The RDMS (Relational Database Management System) is a software that manages the data in a database. It is useful to manage concurrency and security.

The basic operation are CRUD (Create, Read, Update, Delete). The CRUD are the basic operations that are used to manage the data.

```
attribute = "nam e"
value = "John"

Ri = {sets}
```
Every table was constructed based in the sets theory and relational algebra.

## Database SQL

- [Database — Introduction (Part 1)](https://medium.com/omarelgabrys-blog/database-introduction-part-1-4844fada1fb0)


Database SQL save data in format of tables. Like a spreadsheet, it is a collection of rows and columns.

<img src="https://s33046.pcdn.co/wp-content/uploads/2019/12/Data-model-feat.png" style="height:150px">

### Database Relations

Every table has a **primary key**. The primary key is used to identify the data. The primary key is unique. The primary key is used to identify the data.

You could relate tables with **foreign keys**. Foreign keys are used to identify the data. Foreign keys are not unique.

- [Relation 1 to 1](https://fmhelp.filemaker.com/help/18/fmp/en/index.html#page/FMP_Help%2Fone-to-one-relationships.html%23)

In a one-to-one relationship, one record in a table is associated with one and only one record in another table. For example, in a school database, each student has only one student ID, and each student ID is assigned to only one person.

- [One-to-many relationships](https://fmhelp.filemaker.com/help/18/fmp/en/index.html#page/FMP_Help%2Fone-to-many-relationships.html%23)

In a one-to-many relationship, one record in a table can be associated with one or more records in another table. For example, each customer can have many sales orders.

- [Relation N to N](https://fmhelp.filemaker.com/help/18/fmp/en/index.html#page/FMP_Help/many-to-many-relationships.html)

A many-to-many relationship occurs when multiple records in a table are associated with multiple records in another table. For example, a many-to-many relationship exists between customers and products: customers can purchase various products, and products can be purchased by many customers.

## SQL Language

- [MySql Fundamentals Code](fundamentals/introduction.sql)

SQL is the way to write queries to the database. It is a language that is used to write queries to the database. 

### SQL Joins

[Set Theory Medium Article](https://medium.com/basecs/set-theory-the-method-to-database-madness-5ec4b4f05d79)

The relations are sets of data that are related to each other. A relation it's a union of sets.

<img src="https://miro.medium.com/max/1200/1*YhYiJJnQLr5Z7PBKNakN2Q.png" width="300px;">


## How to design a database?

- [Requirements Engineering — Elicitation & Analysis (Part 2)](https://medium.com/omarelgabrys-blog/requirements-engineering-elicitation-analysis-part-2-a02db801f135)

You could use different ways to design a database. The following steps are necessary to design a database:

1. Analyze data requirements and propose a schema.
   - Interview to people that will use the database
   - Analyze business documents
   - Exam existing databases
2. Identify the data model (**Entity-Relation Model**)
   - Create a data modeling
     - Products
     - Users
     - Sells
   - Found relation between data.
3. Organize data in tables (**Entity-Relation Model to Tables**)
   - Tabify data model
   - Identify domain and properties of the entities. Fields of the table.
4. Specify primary key and analyse relationships.
   - Identify cardinality of the relationships. You could create more tables.
   - Identify foreign keys and optionals.
5. [Normalize database](#database-normalization) 

### What is the entity relation model?

- [Database — Modeling : Entity Relationship Diagram (ERD) (Part 5)](https://medium.com/omarelgabrys-blog/database-modeling-entity-relationship-diagram-part-5-352c5a8859e5)

An entity relationship model, also called an entity-relationship (ER) diagram, is a graphical representation of entities (which will become your tables) and their relationships to each other.

<img src="https://storage.googleapis.com/ilerna_media-cloud/2019/11/8VFcEdP8-entidad-relacion-ejemplo2.jpg" width="400px;">

### Database Normalization

- [Database Normalization: Codigo Compilado](https://www.youtube.com/watch?v=bO18omSzeR4&list=PLOG7JkQSkBqZlbtpO1CsP-2wm9wu4LEKc&index=3&ab_channel=CodigoCompilado)
- [Normalize Medium Article](https://medium.com/swlh/normalization-of-database-the-easy-way-98f96a7a6863) 
- [Diseño de base de datos: Conceptos Fundamentales](https://www.youtube.com/watch?v=h6aGdYj7xAw&list=PLOG7JkQSkBqZlbtpO1CsP-2wm9wu4LEKc&index=6&ab_channel=OpenCourseWareTecnologica)

Database Normalisation **is a systematic technique** of organizing the data in the database such that the above-mentioned protocols are met, most importantly eliminating the Data Redundancy. Every normalization it will be without loss of information.

The following are the benefits of database normalization:

- Order
- Delete redundant data
- Optimize the performance and space
- Scale the database

#### First Normal Form

Each attribute of a table must have atomic (single) values only then we can say that the table is in 1NF.

- It should delete atomic values.
  
#### Second Normal Form

The 2FN is the form with transitive relationships.

For a table to be in 2NF:

- It should be in 1NF.
- Non-prime attributes of the table should not depend on the proper subset of any of the candidate key or we can say all the non-prime attributes should be fully functionally dependent on the Candidate key & not on parts of Candidate Key.

#### Third Normal Form

The 3FN (BCFN) every attribute has dependence with the primary key deleting transtive dependencies.

For a table to be in 3NF:

- It should be in 2NF.
- There should be no transitive dependency in the table or we can say, no non-prime attribute should be derived from a non-prime attribute in a relation. They should be determined from the Candidate or Super key.