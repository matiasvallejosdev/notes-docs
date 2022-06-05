# Javascript Data Structures

**Tags:** #javascript-data-structures #data-structures

**Inspired by**
- [Data strcutures](../../notion/20220517163158_data-structures.md)

**Links**
- [Eloquent Data Structures](https://eloquentjavascript.net/04_data.html)
- [How to itearate an object with javascript](https://stackoverflow.com/questions/684672/how-do-i-loop-through-or-enumerate-a-javascript-object)

## Content

### String

- [String Code](../first-splash/strings.js)

Values of type string, number, and Boolean are not objects, and though the language doesn’t complain if you try to set new properties on them, it doesn’t actually store those properties. As mentioned earlier, such values are immutable and cannot be changed.

But these types do have built-in properties. Every string value has a number of methods. Some very useful ones are slice and indexOf, which resemble the array methods of the same name.

### Linked List 

A list is a nested set of objects, with the first object holding a reference to the second, the second to the third, and so on. Linked list in javascript are builder with objects instead in python you build it using a node class and a linked list class to operate on the list.

<img src="https://eloquentjavascript.net/img/linked-list.svg" style="width:300px;">

### Json Data

- [Json Code](../first-splash/json.js)

Json is a data format that is used to store and transmit data. It is a human readable, machine readable, and easy to parse format. It is used to store data in a web server, and is used to store data in a database. MongoDB uses JSON to store data.

### Array

- [Array Code](../first-splash/arrays.js)

Javascript arrays are a collection of values. The values in an array can be of any type. We could use push and pop, which add and remove elements at the end of an array. The corresponding methods for adding and removing things at the start of an array are called unshift and shift.