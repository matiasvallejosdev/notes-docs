# Higher-Order Functions

**Tags:** #functions #order #map

**Inspired by**
- [Functions](20220517162304_javascript-functions.md)

**Links**
- [Eloquent Higorder](https://eloquentjavascript.net/05_higher_order.html)
- [Highorder Code](../first-splash/high-order-functions.js)
- [Eloquent Javascript Examples](../samples/eloquent-exercises/e-ch-5-high-order-functions.js)

## Content

In the context of programming, these kinds of vocabularies are usually called abstractions. Abstractions hide details and give us the ability to talk about problems at a higher (or more abstract) level.

Plain functions, as we’ve seen them so far, are a good way to build abstractions. But sometimes they fall short.

```javascript
let items = []
repeat(5, (i) => {
  labels.push(`Item ${i}`)
});
```

### High-order functions

Functions that operate on other functions, either by taking them as arguments or by returning them, are called higher-order functions. 

Being able to pass function values to other functions is a deeply useful aspect of JavaScript. It allows us to write functions that model computations with “gaps” in them. The code that calls these functions can fill in the gaps by providing function values.

Arrays provide a number of useful higher-order methods. You can use forEach to loop over the elements in an array. The filter method returns a new array containing only the elements that pass the predicate function. Transforming an array by putting each element through a function is done with map. You can use reduce to combine all the elements in an array into a single value. The some method tests whether any element matches a given predicate function. And findIndex finds the position of the first element that matches a predicate.

