# Objects

**Tags:** #dictonaries

**Inspired by**
- [POO and Objects in JS](20220517161319_javascript-oop.md)

**Links**
- https://javascript.info/object-basics
- [Objects Code](../first-splash/objects.js)
- [Chapter 5: Eloquent Excersises](../samples/eloquent-exercises/e-ch-6-objects.js)

## Content

Objects and arrays (which are a specific kind of object) provide ways to group several values into a single value. Conceptually, this allows us to put a bunch of related things in a bag and run around with the bag, instead of wrapping our arms around all of the individual things and trying to hold on to them separately.

```javascript
// You could define as a function
function Product(_name, _price) 
{   
    const name = _name;  
    const price = _price;
    this.getName = function() {    return name;  };
    this.getPrice = function() {    return price;  };
}
```

We use classes in OOP as templates for creating objects. An object is an “instance of a class” and “instantiation” is the creation of an object based on a class. The code is defined in the class but can’t execute unless it is in a live object.

```javascript
// You could define the same with class name
class Product
{
    constructor(name, price){
        this._name;
        this._price;
    }

    getName() {return this._name};
    getPrice() {return this._price};
}
```

### Getters and setters

You can define getters and setters to secretly call methods every time an object’s property is accessed. Static methods are methods stored in a class’s constructor, rather than its prototype.

### Properties and methods

Most values in JavaScript have properties, the exceptions being null and undefined. Properties are accessed using `value.prop` or `value["prop"]`. Objects tend to use names for their properties and store more or less a fixed set of them. Arrays, on the other hand, usually contain varying amounts of conceptually identical values and use numbers (starting from 0) as the names of their properties.

There are some named properties in arrays, such as length and a number of methods. Methods are functions that live in properties and (usually) act on the value they are a `property of` methods won’t have access to a class instance but can, for example, be used to provide additional ways to create instances.

### Static Methods

Inside a class declaration, methods that have static written before their name are stored on the constructor. So objects do more than just hold their own properties. They have prototypes, which are other objects. They’ll act as if they have properties they don’t have as long as their prototype has that property. Simple objects have Object.prototype as their prototype.

### Definition of OOP

[OOP in JS](20220517161319_javascript-oop.md)

One useful thing to do with objects is to specify an interface for them and tell everybody that they are supposed to talk to your object only through that interface. The rest of the details that make up your object are now encapsulated, hidden behind the interface.

More than one type may implement the same interface. Code written to use an interface automatically knows how to work with any number of different objects that provide the interface. This is called polymorphism.

When implementing multiple classes that differ in only some details, it can be helpful to write the new classes as subclasses of an existing class, inheriting part of its behavior.

