// Arrays
// https://eloquentjavascript.net/04_data.html#h_HjL/otjEJn
// Arrays are a collection of values of the same type.

let array = [1,2,3,4,5,6,7,8,9,10];
array.forEach(printArray);
function printArray(value){
    console.log("Value is " + value);
}
console.log(array[array.length - 1]);

// console.log(array.reverse());

/*
The push method adds values to the end of an array, 
and the pop method does the opposite, removing the 
last value in the array and returning it.
*/

array.push(11)
console.log(array);

// These somewhat silly names are the traditional terms for operations on a stack.

array.pop();
console.log(array);

// The corresponding methods for adding and removing 
// things at the start of an array are called unshift and shift.

array.shift();
console.log(array);

array.unshift(11);
console.log(array);

/*
To search for a specific value, arrays provide an indexOf method. 
The method searches through the array from the start to the end 
and returns the index at which the requested value was found 
*/
console.log(array.indexOf(11));
console.log('M A T I A S'.split(' '));

// You can do that using filter()
function isLong(city) {
    return city.length > 8;
  }
const cities = ['London', 'Liverpool', 'Totnes', 'Edinburgh'];
const longer = cities.filter(isLong);
console.log(longer);  // [ "Liverpool", "Edinburgh" ]

console.log(array.map((x)=>x*2));

// Associative Arrays
// Arrays associative are a collection of values of different types.

let keyValue = {
    name: "Matias",
    passport: "af1235fs",
    age: 23,
    whoAreMe: function() {
        console.log(`My name is ${this.name} with passport number ${this.passport} and I am ${this.age} years old.`);
    }
}

console.log(keyValue.whoAreMe());
console.log(keyValue);

