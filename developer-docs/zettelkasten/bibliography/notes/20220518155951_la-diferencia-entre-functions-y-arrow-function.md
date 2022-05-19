# La diferencia entre function y arrow function.

**Tags:** #javascript #functions

**Reference:** [Source](https://www.youtube.com/watch?v=ShUgAiSY6Gk&ab_channel=LeonidasEsteban)

## Notes

Arrow functions are always anonymous functions. With arrow functions you could return a value without any `{}`. You could define your function in one line without parameters.  

_For example:_

```javascript
    // Normal function
    function randomId(){
    }
    // My anonymous function
    () => {
    }
    // My non-anonymous function
    const randomId = () => {
    } 
    // Arrow function without {}
    const randomId = (max) => return Mathf.random() * (max+1);
    // Arrow function without parameters
    const randomId = () => return Mathf.random() * (100+1);
    const randomId = _ => return Mathf.random() * (100+1);
```

It's important to understand that the power of arrow function are when you use it with callbacks and objects. In arrow functions you could inherit the context outside of the class. You can't use this inside of the class.

_For example:_

```javascript
const obj = {
    max: 150,
    randomId:  () => {
        return Mathf.random() * (this.max+1); // This doesn't function properly because take the context and not the object. Instead you could use normal functions.
    }
}
```

Whe you use callbacks like addEventListener for example if you call an instance of `Pokemon` you could use `this` with a arrow function while in normal function with `this` you refer a html context. 

That is the main difference that you could take the upper context and call parents functions or parameters and not just call the main context function. When you need to use `this` inside of a callbacks function you need to use **arrow functions**.

_For examples_

```javascript

class Pokemon extends API{
    constructor(id){
        super(id);
        this.id = id;
        this.$type.addEventListener('click', function(){
            // You can't invoke this.id
            // Because the invoker is an html element
        });
        this.$namee.addEventListener('click', ()=>{
            // You could invoke this.id
            // Because it take the context of the object instead of the caller.
            // Functions inner functions is the power of callbacks.
        });
    }
}
```

> How smart and versatile should our function be? We could write anything, from a terribly simple function that can only pad a number to be three characters wide to a complicated generalized number-formatting system that handles fractional numbers, negative numbers, alignment of decimal dots, padding with different characters, and so on.

A key aspect in understanding functions is understanding scopes. Each block creates a new scope. Parameters and bindings declared in a given scope are local and not visible from the outside. Bindings declared with var behave differently—they end up in the nearest function scope or the global scope.