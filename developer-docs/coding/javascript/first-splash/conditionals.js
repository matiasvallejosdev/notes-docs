// Console input
// https://sebhastian.com/javascript-console-input/

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Conditionals
// The following are some examples of conditionals in JavaScript.

let a = 10;
if(a === 10){
    console.log("a is 10");
}

rl.question("Enter a number: ", function(answer){

    //Check if its even or odd
    if(answer % 2 == 0){
        console.log("The number is even");
    }else{
        console.log("The number is odd");
    }

    rl.close();
});

