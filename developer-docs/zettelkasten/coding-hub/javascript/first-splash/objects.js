// *Arrays
// They are a collection of values

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


// *Maps
/*
A map is a datastrcutre to save key value pairs of data.
*/
let ages = new Map();

ages.set("Matias", 39);
ages.set("Noeli", 22);

console.log(ages.get("Matias"))

// *Getters and setters

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

// *Statics methods

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
