/* 
* Flattening
Use the reduce method in combination with the concat 
method to “flatten” an array of arrays into a single 
array that has all the elements of the original arrays. 
*/

let arrays = [[1,2,3], [4,5], [6]]
let flat = []

arrays.forEach((e) => {
    e.map((x) => flat.push(x))
});

console.log(flat);

/* 
* Your own loop
Write a higher-order function loop that provides something like a for loop statement. 
It takes a value, a test function, an update function, and a body function. 
Each iteration, it first runs the test function on the current loop value and 
stops if that returns false. Then it calls the body function, giving it the current value. 
Finally, it calls the update function to create a new value and starts from the beginning. 
*/


function loop(start, test, update, body){
    for(let n = start; test(n); n = update(n)){
        body(n)
    }
}

loop(3, (n) => n > 0, (n) => n - 1, console.log);

/* 
* Everything
Analogous to the some method, arrays also have an every method. This one returns true when 
the given function returns true for every element in the array. In a way, some is a 
version of the || operator that acts on arrays, and every is like the && operator.

Implement every as a function that takes an array and a predicate function as parameters. 
Write two versions, one using a loop and one using the some method. 
*/

function every(array, test){
    for(let i = 0; i < array.length; i++){
        if(!test(array[i])){
            return false;
        }
    }
    return true;
}

function everyPerformed(array, test){
    return !array.some(x => !test(x));
}

console.log(every([1, 3, 5], n => n < 10));
console.log(everyPerformed([1, 3, 5], n => n < 10));
console.log(every([2, 4, 16], n => n < 10));
console.log(everyPerformed([2, 4, 16], n => n < 10));