# Javascript

[JavaScript](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_is_JavaScript) is a scripting or programming language that allows you to implement complex features on web pages. It's dynamic, object-oriented, and imperative. It's based in prototype, instance and class-based programming. 

It's also an [interpreted language](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_is_JavaScript#interpreted_versus_compiled_code). JavaScript is a lightweight interpreted programming language. The web browser receives the JavaScript code in its original text form and runs the script from that.

**Useful links:**

- [MDN First Steps](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps)
- [Plurasight Basics](https://www.javascript.com/learn)

## Guide
- [Javascript](#javascript)
  - [Guide](#guide)
  - [Javascript Definition](#javascript-definition)
    - [What can it really do?](#what-can-it-really-do)
    - [Browers APIs](#browers-apis)
    - [Third party APIs](#third-party-apis)
    - [What is JavaScript doing on your page?](#what-is-javascript-doing-on-your-page)
    - [Javascript Running Order](#javascript-running-order)
    - [Server side versus client side](#server-side-versus-client-side)
    - [Dynamic vs Static](#dynamic-vs-static)
    - [How do you add JavaScript to your page?](#how-do-you-add-javascript-to-your-page)
    - [async and defer](#async-and-defer)
    - [Comments](#comments)
  - [Javascript Splash](#javascript-splash)
    - [Variables: Let vs Const vs Var](#variables-let-vs-const-vs-var)
    - [Data Types](#data-types)
    - [Conditionals](#conditionals)
    - [Functions](#functions)
    - [Operators](#operators)
      - [Comparation Operators](#comparation-operators)
      - [Logic Operators](#logic-operators)
      - [Equal = vs == vs ===](#equal--vs--vs-)
    - [Events](#events)
    - [Loops](#loops)
    - [Arrays](#arrays)
    - [Objects](#objects)
    - [A small discussion on objects](#a-small-discussion-on-objects)

## Javascript Definition

[Overview Code](samples/what-is-js/index.html)

The three layers build on top of one another nicely. Let's take a simple text label as an example. We can mark it up using HTML to give it structure and purpose:

### What can it really do?

The core client-side javascript consists of some common programming features like:

- Store values.
- Operations on piece of text.
- Running code in response to certain events.
- Whatever you want.

APIs provides extra superpowers to javascript code and you could use it in backend and front-end. APIs are ready-made sets of code building blocks that allow a developer to implement programs that would otherwise be hard or impossible to implement. 

<img src="https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_is_JavaScript/browser.png" style="height:300px">

### Browers APIs

- The DOM (Document Object Model) API allows you to manipulate HTML and CSS, creating, removing and changing HTML, dynamically applying new styles to your page, etc. Every time you see a popup window appear on a page, or some new content displayed (as we saw above in our simple demo) for example, that's the DOM in action.
- The Geolocation API retrieves geographical information. This is how Google Maps is able to find your location and plot it on a map.
- The Canvas and WebGL APIs allow you to create animated 2D and 3D graphics. People are doing some amazing things using these web technologies — see Chrome Experiments and webglsamples.
- Audio and Video APIs like HTMLMediaElement and WebRTC allow you to do really interesting things with multimedia, such as play audio and video right in a web page, or grab video from your web camera and display it on someone else's computer (try our simple Snapshot demo to get the idea).

### Third party APIs 

They are not built into the browser by default, and you generally have to grab their code and information from somewhere on the Web. 

For example:

- Twitter API
- Google Maps API
- Facebook API

### What is JavaScript doing on your page?

When you load a web page in your browser, you are running your code (the HTML, CSS, and JavaScript) inside an execution environment (the browser tab).

Each browser tab has its own separate bucket for running code in (these buckets are called "execution environments" in technical terms) — this means that in most cases the code in each tab is run completely separately, and the code in one tab cannot directly affect the code in another tab — or on another website. 

### Javascript Running Order

1. The browser loads the page.
2. If the browser encountered a block, it run from the top to the bottom.
3. It's important the order for the javascript code and html.

### Server side versus client side

Client code is run in your computer. When the browser loads a page, it runs the code in your computer.

[Server side](https://developer.mozilla.org/en-US/docs/Learn/Server-side) is run his code on the server, then it's results. It's called server side because it's running on the server. Javascript, python, PHP, Ruby, Go, etc. are all server side languages.

### Dynamic vs Static

- Dynamic: The code is run every time the page is loaded.
- Static: The code is run only once.

### How do you add JavaScript to your page?

Internal JS

```html
<script>
  // Javascript code
  console.log('Hello World!');
</script>
```

External JS

```html
<script src="script.js"></script>
```

Inline JS (Deprecated instead using add [event listener](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_is_JavaScript#using_addeventlistener_instead))
```html
// This button is linked to button-user.js
<button onclick="createParagraph()">Click me!</button>
```

### async and defer

There are actually two modern features we can use to bypass the problem of the blocking script — `async` and `defer`.

Scripts loaded using the async attribute will download the script without blocking the page while the script is being fetched.

Scripts loaded with the defer attribute will load in the order they appear on the page. They won't run until the page content has all loaded, which is useful if your scripts depend on the DOM being in place.

<img src="https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_is_JavaScript/async-defer.jpg">

### Comments

As with HTML and CSS, it is possible to write comments into your JavaScript code that will be ignored by the browser.

A single line comment is written after a double forward slash (//), e.g.
```javascript
// My comment here
```
A multi-line comment is written between the strings /* and */, e.g.
```javascript
/*
My multiline comment here
*/
```

## Javascript Splash

- [MDN First Splash](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/A_first_splash) 
- [Sample Code: Guessing Game](samples/first-splash/index.html) 
- [Sample Code](samples/first-cofla-story/problem.js)

One of the hardest things to learn in programming is not the syntax you need to learn, but how to apply it to solve real world problems. You need to start thinking like a programmer — this generally involves looking at descriptions of what your program needs to do. You

### Variables: Let vs Const vs Var

  [freeCodeCamp: let vs var vs const](https://www.freecodecamp.org/news/var-let-and-const-whats-the-difference/) / [Variables Code](first-splash/variables.js)

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

`var` declarations are globally scoped or function scoped while `let` and `const` are block scoped.
`var` variables can be updated and re-declared within its scope; `let` variables can be updated but not re-declared; `const` variables can neither be updated nor re-declared.
They are all hoisted to the top of their scope. But while `var` variables are initialized with undefined, `let` and `const` variables are not initialized.
While `var` and `let` can be declared without being initialized, `const` must be initialized during declaration.

### Data Types

[Data Types Code](first-splash/data-types.js) / [MDN Data Structures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures)

Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.

Dynamic typing
JavaScript is a loosely typed and dynamic language. Variables in JavaScript are not directly associated with any particular value type, and any variable can be assigned (and re-assigned) values of all types:

```javascript
let foo = 42;    // foo is now a number
foo     = 'bar'; // foo is now a string
foo     = true;  // foo is now a boolean
```

**The set of types in the JavaScript language consists of primitive values and objects.**

- **Primitive values** (immutable datum represented directly at the lowest level of the language)
  - Boolean type
  - Null type
  - Undefined type
  - Number type
  - BigInt type
  - String type
  - Symbol type
- **Objects** (collections of properties)

### Conditionals

[Conditionals Code](first-splash/conditionals.js) / [MDN Conditionals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Conditionals)

[Conditionals](https://www.javascript.com/learn/conditionals) statements control behavior in JavaScript and determine whether or not pieces of code can run.

_There are multiple different types of conditionals in JavaScript including:_

- “If” statements: where if a condition is true it is used to specify execution for a block of code. 
- “Else” statements: where if the same condition is false it specifies the execution for a block of code. 
- “Else if” statements: this specifies a new test if the first condition is false.

### Functions

Functions are reusable blocks of code that you can write once and run again and again, saving the need to keep repeating code all the time. This is really useful. There are a number of ways to define functions, but for now we'll concentrate on one simple type.

### Operators

[Operators Code](first-splash/operators.js)

JavaScript operators allow us to perform tests, do math, join strings together, and other such things.

- `+`	Addition	`6 + 9`
- `-`	Subtraction	`20 - 15`
- `*`	Multiplication	`3 * 7`
- `/`	Division	`10 / 5`
  
When we are running true/false tests (for example inside conditionals — see below) we use comparison operators. For example:

- `===`	Strict equality (is it exactly the same?)	
  
```javascript
5 === 2 + 4 // false
'Chris' === 'Bob' // false
5 === 2 + 3 // true
2 === '2' // false; number versus string
```

- `!==`	Non-equality (is it not the same?)	
```javascript
5 !== 2 + 4 // true
'Chris' !== 'Bob' // true
5 !== 2 + 3 // false
2 !== '2' // true; number versus string
```

- `<`	Less than	
```javascript
6 < 10 // true
20 < 10 // false
```

- `>`	Greater than	
```javascript
6 > 10 // false
20 > 10  // true
```

#### Comparation Operators

Are used to compare two expression that return a boolean value (true or false). It is often used in conditionals and represent the relationship between two values.

#### Logic Operators

Are used to return a result if the condition is true or false, the result is boolean value and can be used in conditionals.

#### Equal = vs == vs ===

|=	|==	|===|
|---|---|---|
|= in JavaScript is used for assigning values to a variable.	|== in JavaScript is used for comparing two variables, but it ignores the datatype of variable.|	=== is used for comparing two variables, but this operator also checks datatype and compares two values.|
|It is called as assignment operator	|It is called as comparison operator	|It is also called as comparison operator|
|The assignment operator can evaluate to the assigned value|	Checks the equality of two operands without considering their type.|	Compares equality of two operands with their types.|
|== will not compare the value of variables at all.	|The == checks for equality only after doing necessary conversations.	|If two variable values are not similar, then === will not perform any conversion.|

### Events

Events are things that happen in the browser — a button being clicked, a page loading, a video playing, etc. — in response to which we can run blocks of code. Event listeners observe specific events and call event handlers, which are blocks of code that run in response to an event firing.

```javascript
// This button is linked to button-user.js
const sumbit = document.querySelector('#sumbit');
sumbit.addEventListener('click', function);
```

### Loops

One part of the above code that we need to take a more detailed look at is the for...of loop. Loops are a very important concept in programming, which allow you to keep running a piece of code over and over again, until a certain condition is met.

```javascript
const fruits = ['apples', 'bananas', 'cherries'];
for (const fruit of fruits) {
  console.log(fruit);
}
```

### Arrays

[Arrays](https://www.javascript.com/learn/arrays) are container-like values that can hold other values. The values inside an array are called elements.
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

### Objects

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


### A small discussion on objects

This line uses the focus() method to automatically put the text cursor into the `<input>` text field as soon as the page loads, meaning that the user can start typing their first guess right away, without having to click the form field first. 