// Loops
// While
// The while loop is used to execute a block of code as long as a condition is true.

// Save array even numbers until 10
let n = 1;
let evenNumbers = [];

while(n < 6){
    num = n * 2;
    evenNumbers.push(num);
    n++;
}

console.log(evenNumbers);

// Do While
// The do while loop is used to execute a block of code at least once, even if the condition is false.
let myName;
let isValue = false;

do{
    myName = "Matias"
    isValue = true;
} while(!isValue);


console.log(myName);

// For Loops
// The for loop is used to execute a block of code a number of times.

let j = 0;
for(let i = 0; i < 10; i++){
    j += i;
}
console.log(j);

// Foreach
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
// Foreach is used to execute a block of code a number of times.

let a = ['Apple', 'Orange', 'Banana'];
a.forEach((element)=>{
    console.log(element);
});

