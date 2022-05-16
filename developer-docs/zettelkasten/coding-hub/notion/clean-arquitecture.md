# Clean Arquitecture

**Useful links**
- [Clean Architecture: La mejor forma de escalar y mantener tu código](https://www.youtube.com/watch?v=y3MWfPDmVqo&ab_channel=CodelyTV-Redescubrelaprogramaci%C3%B3n)
- [The Clean Architecture](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html)
- [Solid](solid-principles.md)

## Guide
- [Clean Arquitecture](#clean-arquitecture)
  - [Guide](#guide)
  - [What is an architecture?](#what-is-an-architecture)
  - [What is clean arquitecture?](#what-is-clean-arquitecture)
  - [Hexagonal Architecture](#hexagonal-architecture)
  - [Folder Arquitecture](#folder-arquitecture)
    - [By type and how are you](#by-type-and-how-are-you)
    - [By how are you and type](#by-how-are-you-and-type)

## What is an architecture?

An arquitecture is the way that you creat low and high level details of your application. Define the shape and the structure of your application.

It's useful to reduce build, align business requirements and improve the quality of your application. You could define quality attributes in order to improve the maintainability and scalability of your application.


## What is clean arquitecture?

Clean arquitecture is a way to organize your code in a way that is easy to understand and maintain. A clean arquitecture is abstractions between the business logic and the presentation layer.

## Hexagonal Architecture

It's the way to uncouple the infrastructure from the application. It is easy to understand and maintain.

<img src="https://cohesivebytes.files.wordpress.com/2017/01/hexagonal.png" style="height:200px">

## Folder Arquitecture

It's the way to organize based on the arquitecture. That is based in type(s) of data.

### By type and how are you

**Type(Father)** / Classify (How are you?)

- Infrastructure
  - Products
  - Users
- Application
  - Products
  - Users
- Domain
  - Products
  - Users

### By how are you and type

It's the way to organize based on the arquitecture. That is based in type(s) of data.

**Classify (How are you?)** / Type(Father)

- Products
  - Infrastructure
  - Application
  - Domain
- Users
  - Infrastructure
  - Application
  - Domain




