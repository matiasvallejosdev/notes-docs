// Arrays
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

// Objects
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

