# Tech Note

Tags: #tag1 #tag2 #tag3

**Inspired by**
- [..]()

**Links**
- [..]()

## Content

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