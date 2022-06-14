// *Arrays
/*
They are a collection of values of the same type. 
They are ordered, and each value has an index number.
*/

let a = ['a', 'b', 'c'];
let b = [1,2,3]
let c = ['Hello', 'World', true, 20];
let d = [[1,2,3], [3,2,1]]

d.forEach(e => {
    console.log(e);
});

console.log(''.concat(a))

console.log(c[0] + ' '.concat(c[1]));

// *Objects
/*
The binary in operator, when applied to a string and 
an object, tells you whether that object has a property 
with that name.
*/ 
let myObject = {
    left: [0,1,1],
    right: [1,1,0],
    center: [1,0,1]
}
console.log('left' in myObject); // Return true

// To find out what properties an object has
console.log(Object.keys(myObject));

// There’s an Object.assign function that copies all properties from one object into another.
console.log(Object.assign(myObject, {math: ()=> left + right}))

// Getters and setters

let numbers = {
    array: [2,4,5],
    get lenght(){
        return this.array.length;
    },
    set element(value){
        this.array.push(value);
    }
}

console.log(numbers.array)
console.log(numbers.lenght)
console.log(numbers.element = 6)
console.log(numbers.array)
console.log(numbers.lenght)

// Statics methods

class Temperature{
    constructor(celsius){
        this.temp = celsius;
    }
    static fromFahrenheit(value){
        return new Temperature((value-32) / 1.8);
    }
}

let tempObj = Temperature.fromFahrenheit(60);
console.log(tempObj.temp)

// https://javascript.info/map-set
// *Maps
/*
A map is a datastrcutre to save key value pairs of data. It's useful for saving 
data in a structured way. 
Use a Map when you have pairs of associated data. You map the keys to the values
- A map doesn't have any key by default like toString.
- It store the order of keys.
- It has better performance than objects to add and remove elements.
- It has a better API.
*/
let ages = new Map([['John', 30],['Bob', 20]]);

ages.set("Matias", 39);
ages.set("Noeli", 22);

console.log(ages)
console.log(ages.size)
console.log(ages.has('John'))
console.log(ages.get('John'))

// *Set
/*
Set is a data structure that stores unique values.
It's a non-primitive data type.
Use a Set when your dataset needs to be composed of unique values
*/

let num = new Set([3,4,5,1,2,2,3]);
num.add(3)
console.log(Array.from(num));