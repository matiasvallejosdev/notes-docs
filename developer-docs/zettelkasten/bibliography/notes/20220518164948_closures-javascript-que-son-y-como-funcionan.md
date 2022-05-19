# CLOSURES en JavaScript: Qué son y cómo funcionan

**Tags:** #functions #closures

**Reference:** [Source](https://youtu.be/xa8lhVwQBw4)

## Notes

Closures are a pattern like a "good part". Every function in JS is a object. You could save a function in a variable like an object.

```javascript
// Variable
const hi = function(name)=>{
    return "Hi " + name;
}
```

A function can be either a function inner scope. It's a kind a functionallity like when you perform a message in python like for example decorators. They use functions inner functions to perform a decorated value.

In javascript is the same thing you could do the same thing like python binding functions inner functions.

```javascript
// Functions inner functions
function global(){
    return local(){

    };
}
const myDecorated = global();
myDecorated();
```

A [closures](20220518170537_closures.js) simulate the functionality of a class. It look a function automatically that return variables or functions to work with it.

```javascript
const count = (function(){
    let _count = 0;
    const add = () =>{
        return _count++;
    }
    const rest = () =>{
        return _count--;
    }
    const value = () =>{
        return _count;
    }
    return {
        add,
        rest,
        value
    }
});
```