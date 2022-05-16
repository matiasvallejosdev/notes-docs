/*
Exercises
If you are unsure how to test your solutions to the exercises, 
refer to the Introduction.

Each exercise starts with a problem description. Read this 
description and try to solve the exercise. If you run 
into problems, consider reading the hints after 
the exercise.
*/

/*
* Looping a triangle
Write a loop that makes seven calls to console.log to 
output the following triangle:

#
##
###
####
#####
######
#######

It may be useful to know that you can find the length 
of a string by writing .length after it.

let abc = "abc";
console.log(abc.length);
→ 3
*/

let n = 7;
let hash = "#";

for(let i = 0; i < n; i++) {
    console.log(hash);
    hash += "#";
}

console.log('')

/*
*FizzBuzz

Write a program that uses console.log 
to print all the numbers from 1 to 100, with two exceptions. 
For numbers divisible by 3, print "Fizz" 
instead of the number, and 
for numbers divisible by 5 (and not 3), 
print "Buzz" instead.

When you have that working, 
modify your program to print "FizzBuzz" 
for numbers that are divisible by both 3 and 5 
(and still print "Fizz" or "Buzz" for numbers divisible 
by only one of those).
*/

/*
let a = []

for(let i = 1; i < 101; i++) { 
    if(i % 15 == 0){
        a.push('FizzBuzz');
    } else if(i % 3 == 0){
        a.push('Fizz');
    } else if(i % 5 == 0){
        a.push('Buzz');
    } else {
        a.push(i);
    }
}

console.log(a);
*/

let a = []

for(let i = 1; i <=100; i++){
    let result = ''

    if(i % 3 == 0){
        result += 'Fizz';
    }
    if(i % 5 == 0){
        result += 'Buzz';
    }
    
    a.push(result || i); 
}

console.log(a);
console.log('')

/*
* Chessboard

Write a program that creates a string that 
represents an 8×8 grid, using newline characters 
to separate lines. At each position of the grid 
there is either a space or a "#" character. 
The characters should form a chessboard.

Passing this string to console.log 
should show something like this:

 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # #

When you have a program that generates this pattern, 
define a binding size = 8 and change the program 
so that it works for any size, outputting a 
grid of the given width and height.

*/


let grid = 8;
let res = '';

chessboard = num =>{
    for(let j = 1; j <= num; j++){
        for (let n = 1; n <= num; n++) {
            if((j+n) % 2 == 0){
                res = res.concat(' ');
            } else {
                res = res.concat('#');
            }
        }
        res += '\n';
    }
    return res;
}

console.log(chessboard(5));
