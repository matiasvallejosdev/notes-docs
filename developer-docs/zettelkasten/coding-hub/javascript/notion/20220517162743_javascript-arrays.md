# Arrays

Tags: #data #data-type #array

**Inspired by**
- [..]()

**Links**
- [Arrays](https://www.javascript.com/learn/arrays)

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