# Arrays

**Tags:** #data #datatype #array 

**Inspired by**
- [Variables](20220517161515_javascript-variables.md)

**Links**
- [Arrays](https://www.javascript.com/learn/arrays)
- [Arrays MDN](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Arrays#what_is_an_array)
- [Arrays Code](../first-splash/arrays.js)

## Content

### Arrays

Arrays are container-like values that can hold other values. The values inside an array are called elements.

An array is a single object that contains multiple values enclosed in square brackets and separated by commas. Try entering the following lines into your console:

```javascript

// EXAMPLE
var breakfast = ["coffee", "croissant"];
breakfast;

// OUTPUT
["coffee", "croissant"]
```

Array elements don’t all have to be the same type of value. Elements can be any kind of JavaScript value — even other arrays.

```javascript
var hodgepodge = [100, "paint", [200, "brush"], false];
```

To access one of the elements inside an array, you’ll need to use the brackets and a number like this: myArray[3]. JavaScript arrays begin at 0, so the first element will always be inside [0].

```javascript
var sisters = ["Tia", "Tamera"];
​sisters[0];
```

The elements in an array are stored as the array’s properties, using numbers as property names. Because you can’t use the dot notation with numbers and usually want to use a binding that holds the index anyway, you have to use the bracket notation to get at them.

Properties that contain functions are generally called methods of the value they belong to, as in “toUpperCase is a method of a string”.

### Arrays Associatives

It's similar to JSON data. That you could define association key-value pairs. 