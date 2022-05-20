# Basic Math JS

**Tags:** #math #javascript

**Inspired by**
- [Operators](20220517162427_javascript-operators.md)

**Links**
- [Basic Math](../first-splash/basic-math.js)
- [Math object eloquent](https://eloquentjavascript.net/04_data.html#h_C51DnYk8WZ)

## Content

### Type of numbers

* Integers are floating-point numbers without a fraction. They can either be positive or negative, e.g. 10, 400, or -5.
* Floating point numbers (floats) have decimal points and decimal places, for example 12.5, and 56.7786543.
* Doubles are a specific type of floating point number that have greater precision than standard floating point numbers (meaning that they are accurate to a greater number of decimal places).
* Binary — The lowest level language of computers; 0s and 1s.
* Octal — Base 8, uses 0–7 in each column.
* Hexadecimal — Base 16, uses 0–9 and then a–f in each column. You may have encountered these numbers before when setting colors in CSS.

### The math object

Math is a grab bag of number-related utility functions, such as Math.max (maximum), Math.min (minimum), and Math.sqrt (square root).

The Math object is used as a container to group a bunch of related functionality. There is only one Math object, and it is almost never useful as a value. Rather, it provides a namespace so that all these functions and values do not have to be global bindings.

If you need to do trigonometry, Math can help. It contains cos (cosine), sin (sine), and tan (tangent), as well as their inverse functions, acos, asin, and atan, respectively. The number π (pi)—or at least the closest approximation that fits in a JavaScript number—is available as Math.PI.

```javascript
function randomPointOnCircle(radius) {
  let angle = Math.random() * 2 * Math.PI;
  return {x: radius * Math.cos(angle),
          y: radius * Math.sin(angle)};
}
console.log(randomPointOnCircle(2));
// → {x: 0.3667, y: 1.966}
```

