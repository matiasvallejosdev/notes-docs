// Console input
// https://sebhastian.com/javascript-console-input/

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});


// Request an amout of money and show the highest price
// https://stackoverflow.com/questions/47498083/find-the-closest-smaller-value-of-an-array
// let arr = [0, 38, 136, 202, 261, 399];
// let val = 300;
// let number = arr.reverse().find(e => e <= val);
// console.log(number);

let prices = [0.6, 1, 1.6, 1.7, 1.8, 2.9, 2.9]

rl.question("Enter amount of money to spend: ", function(answer){
    // Check if exist in prices
    let highest = 0;

    for (let i = 0; i < prices.length; i++) {
        if(parseFloat(answer) >= prices[i]){
            highest = prices[i];
        }
    }
    console.log("The highest price is " + highest);
    rl.close();
});

