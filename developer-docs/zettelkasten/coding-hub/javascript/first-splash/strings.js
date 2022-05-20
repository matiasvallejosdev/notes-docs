// Strings and their properties
// https://eloquentjavascript.net/04_data.html#h_mT4YQfwHp6

// Converting number to string
let myString = 10;
console.log(typeof (myString.toString()));

// Finding the length of a string
let myName = 'Matias';
console.log(myName.length);

// Last character
console.log(myName[myName.length - 1]);

// Testing if a string contains a substring
console.log(myName.includes("Mat"));
console.log(myName.includes("Em"));

// Often you'll want to know if a string starts or ends 
// with a particular substring. This is a common enough 
// need that there are two special methods for this: startsWith() and endsWith():
console.log(myName.startsWith('Mat'));
console.log(myName.endsWith('as'));

// Finding the position of a substring in a string
let pos = myName.indexOf('a');
console.log(pos);
console.log(myName[pos]);

// Extracting a substring from a string
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice
let extract = myName.slice(2,4);
console.log(extract);

// Changing case
console.log(myName.toLowerCase());
console.log(myName.toUpperCase());

// Updating parts of a string
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replaceAll
console.log(myName.replace('M','X'));

// The trim method removes whitespace
console.log("  okay  ".trim());
console.log(String(1).padStart(3, "0"));

/*
You can split a string on every occurrence of another string 
with split and join it again with join.
*/
let name =  "L O L A";
let extractArray = name.split(" ");
console.log(extractArray);

let returnString = extractArray.join("");
console.log(returnString.charAt(0).toUpperCase() + returnString.slice(1).toLowerCase());

// A string can be repeated with the repeat method
console.log("Lo".repeat(2));