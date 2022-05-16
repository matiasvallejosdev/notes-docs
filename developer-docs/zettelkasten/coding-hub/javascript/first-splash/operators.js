// The following operators are commonly used in JavaScript:

// Assignment Operators
// The following operators are used to assign values to variables:

// = Assigns a value to a variable
let x = 20;

// += Adds a value to a variable
// -= Subtracts a value from a variable
let a = 10;
a += 10; 
console.log("Addition += is " + a); // -= 10 = 0

// %= Modulus a value from a variable
// Division rest dividing a variable by integers
let m = 20;
m %= 2;
console.log("Modulus %= is " + m); // %= 0

// *= Multiplies a value to a variable
// /= Divides a value from a variable
let b = 5;
b *= 5;
console.log("Multiplier *= is " + b);

// **= Exponentiates a value to a variable
let d = 2;
d **= 2;
console.log("Exponetiates **= is " + d); // **= 4

// - Arithmetic Operators
// The following operators are used to perform arithmetic operations:

// + Adds two values
// - Subtracts two values
// * Multiplies two values
// / Divides two values
let h = 100;
h = h + 100;
h = h * 5;
h = h / 10;
console.log("Arithmetic combination *,/,-,+ is " + h); 

// ** Exponentiates a value
let j = 100 ** 2;
console.log("Exponetiates ** is " + j); 


// ++ Increments a variable by 1
// -- Decrements a variable by 1
let f = 100;
f++;
console.log("Increments ++ is " + f);

// % Modulus of two values
// Check if the value a is odd
if(a % 2 == 0){
    console.log("Moduls % is even");
}

// Comparison Operators
// The following operators are used to perform operations:

// == Checks if two values are equal
// != Checks if two values are not equal
// > Checks if one value is greater than another
// < Checks if one value is less than another
// >= Checks if one value is greater than or equal to another
// <= Checks if one value is less than or equal to another

let g = 100;
console.log("Equal " + (g === 100));
console.log("Not Equal " + (g === "100"));

// Logic Operators
// The following operators are used to perform logic operations:

// && Checks if both values are true
// || Checks if one value is true
// ! Checks if the value is false
// != Checks if two values are not equal

let n = "Matias";
if(n == "Matias" && n != "Pedro"){
    console.log("Logic combination && is true");
}

let o = 100;
if(o != 100){
    console.log("Logic combination != is true");
} else {
    console.log("Logic combination != is false");
}


