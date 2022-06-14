# Functions

Tags: #functions

**Inspired by**
- https://eloquentjavascript.net/03_functions.html

**Links**
- [Functions Code](../first-splash/functions.js)
- [Chapter 3: Eloquent Excersises](../samples/eloquent-exercises/e-ch-3-functions.js)

## Content

### What is a function?

Functions are reusable blocks of code that you can write once and run again and again, saving the need to keep repeating code all the time. This is really useful. There are a number of ways to define functions, but for now we'll concentrate on one simple type.

A function definition is a regular binding where the value of the binding is a function. 

- A function is created with an expression that starts with the keyword function. Functions have a set of parameters (in this case, only x) and a body, which contains the statements that are to be executed when the function is called
- A function can have multiple parameters or no parameters at all.

### Binding and scope

Bindings defined outside of the functions has a **Global scope**. But binding declared inside of a function can be refered inside of a function. 

> [Bindings](20220517161515_javascript-variables.md) declared with **let and const** are in fact local to the block that they are declared. In pre-2015 JavaScript, only functions created new scopes, so old-style bindings, created with the **var** keyword, are visible throughout the whole function that they appear in—or throughout the global scope.

JavaScript distinguishes not just global and local bindings. **Blocks and functions can be created inside other blocks** and functions, producing multiple degrees of locality.

The **set of bindings visible inside a block** is determined by the place of that block in the program text. Each local scope can also see all the local scopes that contain it, and all scopes can see the global scope. This approach to binding visibility is called lexical scoping.

### Declaration functions

Function declarations **are not part of the regular top-to-bottom flow of control**. They are conceptually moved to the top of their scope and can be used by all the code in that scope.

More definitions in example of [functions](20220517162304_javascript-functions.md)


### Arrow functions

- [Difference between arrow functions and functions](../../../bibliography/notes/20220518155951_la-diferencia-entre-functions-y-arrow-function.md)

The arrow comes after the list of parameters and is followed by the function’s body. It expresses something like “this input (the parameters) produces this result (the body)”.

```javascript
const power = (base,exponent) =>{
    // Do here
}
```

### Functions arguments

JavaScript is extremely broad-minded about the number of arguments you pass to a function. If you pass too many, the extra ones are ignored. If you pass too few, the missing parameters get assigned the value undefined.

If you write an = operator after a parameter, followed by an expression, the value of that expression will replace the argument when it is not given.

### Closures

[CLOSURES en JavaScript: Qué son y cómo funcionan](../../../bibliography/notes/20220518164948_closures-javascript-que-son-y-como-funcionan.md)

The ability to treat functions as values, combined with the fact that local bindings are re-created every time a function is called.

### Recursion

A function that calls itself is called recursive. Recursion allows some functions to be written in a different style.

```javascript
// Reference: To https://eloquentjavascript.net/03_functions.html
function power(base, exponent) {
  if (exponent == 0) {
    return 1;
  } else {
    return base * power(base, exponent - 1);
  }
}

console.log(power(2, 3));
```

Recursion is not always just an inefficient alternative to looping. Some problems really are easier to solve with recursion than with loops. Most often these are problems that require exploring or processing several “branches”, each of which might branch out again into even more branches.

### Growing functions

There are two more or less natural ways for functions to be introduced into programs. Good naming and clear naming are good practices in order to indicate a clear concept wraped.

### Arrow functions vs Functions

[Arrow functions vs functions](../../../bibliography/notes/20220518155951_la-diferencia-entre-functions-y-arrow-function.md)

Since each function has its own this binding, whose value depends on the way it is called, you cannot refer to the this of the wrapping scope in a regular function defined with the function keyword.

Arrow functions are different—they do not bind their own this but can see the this binding of the scope around them.