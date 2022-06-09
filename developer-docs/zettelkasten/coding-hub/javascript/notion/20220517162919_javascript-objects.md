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

Most values in JavaScript have properties, the exceptions being null and undefined. Properties are accessed using `value.prop` or `value["prop"]`. Objects tend to use names for their properties and store more or less a fixed set of them. Arrays, on the other hand, usually contain varying amounts of conceptually identical values and use numbers (starting from 0) as the names of their properties.

_There are some named properties in arrays, such as length and a number of methods. Methods are functions that live in properties and (usually) act on the value they are a property of._

### Objects 

Objects in JavaScript are quite flexible and can be used to create key-value pairs. These objects are quite similar to dictionaries and work alike.

Dictionaries are commonly used as each value stored has a unique key, and through these keys, their respective values can be accessed. This allows a lot of flexibility while reading and storing data.

```javascript

let dict = {
  'Name': 'John',
  'Age': 30,
  'City': 'New York'
};

dict['Age'] = 29;
```

JavaScript objects are variables that contain multiple data values. The values within a JS object are known as properties. Objects use keys to name values, much like how is done with variables.

Let’s look at another example. This time let’s think about a course you have to take. The course name is “GRA 2032”, it starts at 8:00am and it ends at 10:00am. Here’s how we would turn this into an object in JavaScript:

```javascript
var course = {
       name: "GRA 2032",
       start: 8,
       end: 10
};
```

JavaScript object values are written in the format of name:value and the different pairs are separated by commas. The name:value pairs don’t have to be on different lines for the code to work, but it is much easier to read and understand the code by formatting it that way. You must also use the opening and closing curly brackets `{ }` when defining your objects.

Inside the braces, there is a list of properties separated by commas. Each property has a name followed by a colon and a value.

JavaScript is not a class-based object-oriented language. But it still has ways of using object oriented programming (OOP). You could see more information about [OOP and objects](20220517161319_javascript-oop.md).

### Muttable

Objects work differently. You can change their properties, causing a single object value to have different content at different times.

When we have two numbers, 120 and 120, we can consider them precisely the same number, whether or not they refer to the same physical bits. With objects, there is a difference between having two references to the same object and having two different objects that contain the same properties.

### Getters, setters, and statics

Interfaces often consist mostly of methods, but it is also okay to include properties that hold non-function values. For example, Map objects have a size property that tells you how many keys are stored in them.

It is not even necessary for such an object to compute and store such a property directly in the instance. Even properties that are accessed directly may hide a method call. Such methods are called getters, and they are defined by writing get in front of the method name in an object expression or class declaration.

Whenever someone reads from this object’s size property, the associated method is called. You can do a similar thing when a property is written to, using a setter.

### Statics methods

Sometimes you want to attach some properties directly to your constructor function, rather than to the prototype. Such methods won’t have access to a class instance but can, for example, be used to provide additional ways to create instances.

Inside a class declaration, methods that have static written before their name are stored on the constructor.