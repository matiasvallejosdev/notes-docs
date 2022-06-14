// Round number to a fixed decimal places for
let decimal = 1.30123123214234;
decimal = decimal.toFixed(2);
console.log(decimal);

// Converting to number data types
let myNumber = '10';
console.log(typeof (Number(myNumber)));

// Converting number to string
let myString = 10;
console.log(typeof (myString.toString()));

// Square root
let num = 25
console.log(Math.sqrt(num));

// Cubic root
let num2 = 8
console.log(Math.cbrt(num2));

// Maxiumum value and Minimum value
let num3 = [1,2,3,4,5,6,7,8,9,10]
console.log(Math.max(...num3));
console.log(Math.min(...num3));

// Random
let num4 = Math.random()
console.log(Math.floor(num4*10) + 1);

// Round and floor
let num5 = 10.5
console.log(Math.round(num5));
console.log(Math.floor(num5));

// Trunc
let num6 = 1.5
console.log(Math.trunc(num6));
