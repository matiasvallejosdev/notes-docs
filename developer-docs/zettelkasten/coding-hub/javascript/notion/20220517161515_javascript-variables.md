# Variables: Let vs Const vs Var

Tags: #tag1 #tag2 #tag3

**Inspired by**
- [Javascript Definition](20220517161029_javascript-definition.md)

**Links**
- [freeCodeCamp: let vs var vs const](https://www.freecodecamp.org/news/var-let-and-const-whats-the-difference/) 
- [Variables Code](first-splash/variables.js)

## Content

Variables are basically names for values (such as numbers, or strings of text). You create a variable with the keyword let followed by a name for your variable.

`Var`

The scope is global when a var variable is declared outside a function. This means that any variable that is declared with var outside a function block is available for use in the whole window.

Var is function scoped when it is declared within a function. This means that it is available and can be accessed only within that function.

```javascript
    var greeter = "hey hi";
    
    function newFunction() {
        var hello = "hello";
    }
```

- var variables can be re-declared and updated
- var variables are hoisted to the top of their scope and initialized with a value of undefined.
- If you have used greeter in other parts of your code, you might be surprised at the output you might get. This will likely cause a lot of bugs in your code. This is why let and const are necessary.

`Let`

let is now preferred for variable declaration. It's no surprise as it comes as an improvement to var declarations. It also solves the problem with var that we just covered. Let's consider why this is so.

- let is block scoped
- let can be updated but not re-declared.

`Const`

Variables declared with the const maintain constant values. const declarations share some similarities with let declarations.

- const declarations are block scoped
- const cannot be updated or re-declared
- Just like let, const declarations are hoisted to the top but are not initialized.

**So just in case you missed the differences, here they are:**

- `var` declarations are globally scoped or function scoped while `let` and `const` are block scoped.
- `var` variables can be updated and re-declared within its scope; `let` variables can be updated but not re-declared; `const` variables can neither be updated nor re-declared.
- They are all hoisted to the top of their scope. But while `var` variables are initialized with undefined, `let` and `const` variables are not initialized.
- While `var` and `let` can be declared without being initialized, `const` must be initialized during declaration.

