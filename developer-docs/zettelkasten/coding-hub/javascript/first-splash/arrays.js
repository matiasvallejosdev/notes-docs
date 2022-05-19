// Arrays
// Arrays are a collection of values of the same type.

let array = [1,2,3,4,5,6,7,8,9,10];
array.forEach(printArray);
function printArray(value){
    console.log("Value is " + value);
}
console.log(array[array.length - 1]);
console.log(array.reverse());

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