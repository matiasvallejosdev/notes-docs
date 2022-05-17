# Database Normalization

Tags: #normalize #scale #atomic

**Inspired by**
- [How to design your database](20220517163928_db-how-to-design-a-database.md)

**Links**
- [Database Normalization: Codigo Compilado](https://www.youtube.com/watch?v=bO18omSzeR4&list=PLOG7JkQSkBqZlbtpO1CsP-2wm9wu4LEKc&index=3&ab_channel=CodigoCompilado)
- [Normalize Medium Article](https://medium.com/swlh/normalization-of-database-the-easy-way-98f96a7a6863) 
- [Diseño de base de datos: Conceptos Fundamentales](https://www.youtube.com/watch?v=h6aGdYj7xAw&list=PLOG7JkQSkBqZlbtpO1CsP-2wm9wu4LEKc&index=6&ab_channel=OpenCourseWareTecnologica)

## Content

Database Normalisation **is a systematic technique** of organizing the data in the database such that the above-mentioned protocols are met, most importantly eliminating the Data Redundancy. Every normalization it will be without loss of information.

The following are the benefits of database normalization:

- Order
- Delete redundant data
- Optimize the performance and space
- Scale the database

## First Normal Form

Each attribute of a table must have atomic (single) values only then we can say that the table is in 1NF.

- It should delete atomic values.
  
## Second Normal Form

The 2FN is the form with transitive relationships.

For a table to be in 2NF:

- It should be in 1NF.
- Non-prime attributes of the table should not depend on the proper subset of any of the candidate key or we can say all the non-prime attributes should be fully functionally dependent on the Candidate key & not on parts of Candidate Key.

## Third Normal Form

The 3FN (BCFN) every attribute has dependence with the primary key deleting transtive dependencies.

For a table to be in 3NF:

- It should be in 2NF.
- There should be no transitive dependency in the table or we can say, no non-prime attribute should be derived from a non-prime attribute in a relation. They should be determined from the Candidate or Super key.