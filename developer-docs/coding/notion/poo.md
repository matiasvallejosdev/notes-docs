# Object Oriented Programming

**Useful links**
- [OOP Easy](https://www.youtube.com/watch?v=pTB0EiLXUC8&ab_channel=ProgrammingwithMosh)
- [Object-Oriented Programming — The Trillion Dollar Disaster](https://betterprogramming.pub/object-oriented-programming-the-trillion-dollar-disaster-92a4b666c7c7)

## Guide
- [Object Oriented Programming](#object-oriented-programming)
  - [Guide](#guide)
  - [Procedural Programming](#procedural-programming)
  - [What is OOP?](#what-is-oop)
    - [Classes and instances](#classes-and-instances)
    - [Encapsulation](#encapsulation)
    - [Abstraction](#abstraction)
    - [Inheritance](#inheritance)
    - [Polymorphism](#polymorphism)

## Procedural Programming

Procedural programming is a programming paradigm that uses a sequence of steps to solve a problem. It is a way to solve problems by writing a sequence of instructions that tells a computer what to do.

## What is [OOP](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object-oriented_programming)?

OOP is the way used to make the code more reusable, efficient, and maintainable. In OOP we group related data and functions into objects.

<img src="https://res.cloudinary.com/practicaldev/image/fetch/s--yR9z_YIG--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/q926dojhwqyfbbban1qp.png" style="height:300px">

Object-oriented programming is about modeling a system as a collection of objects, where each object represents some particular aspect of the system. Objects contain both functions (or methods) and data. An object provides a public interface to other code that wants to use it but maintains its own private, internal state; other parts of the system don't have to care about what is going on inside the object.

```pseudocode
class Professor
    properties
        name
        teaches
    methods
        grade(paper)
        introduceSelf()

class Person
    properties
        name
        age
    methods
        walk()
```

On its own, a class doesn't do anything: it's a kind of template for creating concrete objects of that type. Each concrete professor we create is called an instance of the Professor class. The process of creating an instance is performed by a special function called a constructor. We pass values to the constructor for any internal state that we want to initialize in the new instance.

### Classes and instances

When we model a problem in terms of objects in OOP, we create abstract (classes) definitions representing the types of objects we want to have in our system.

### Encapsulation

Objects provide an interface to other code that wants to use them but maintain their own internal state. The object's internal state is kept private, meaning that it can only be accessed by the object's own methods, not from other objects. Keeping an object's internal state private, and generally making a clear division between its public interface and its private internal state, is called encapsulation.

<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-n2zUwEQqA_OD9TPRlpYv11jECuRl42eu8XhoHbyCzNw4bEvjlP2sYownaMmgj4SKYWQ&usqp=CAU">

### Abstraction

Abstraction is the way to encapsulate properties with interfaces in order to reduce the impact of changes. We can hide the implementation details of an object by providing a simplified interface to other code.

<img src="https://i.ibb.co/7Qg0MhB/abstraction.png" style="width:300px">

### Inheritance

We start by observing that students and professors are both people, and people have names and want to introduce themselves. We can model this by defining a new class Person, where we define all the common properties of people.

<img src="https://img-16.ccm2.net/_tbKjSTchfAOch80rBS73pJnS2s=/313x/506e368f623744669396580451bd6587/ccm-encyclopedia/poo-images-animaux.gif">

### Polymorphism

[How to use polymorphism?](https://codegym.cc/groups/posts/99-how-to-use-polymorphism)

Polymorphism is a program's ability to treat objects with the same interface in the same way, without information about the object's specific type. If you answer a question about what polymorphism is, you'll most likely be asked to explain what you meant. Without triggering a bunch of additional questions, lay it all out for the interviewer once again.

Poly means many and morphism form. In OOP, we can use polymorphism to make our code more flexible. It can act depending on the type of object that we are working with.
For example you could have different methods to implement the way to save a file depending. We could refactory ugly switch case to a polymorphic function.

<img src="https://cdn.codegym.cc/images/article/39c454f1-7998-4dd4-a812-1fe8d3f9c10b/800.jpeg">