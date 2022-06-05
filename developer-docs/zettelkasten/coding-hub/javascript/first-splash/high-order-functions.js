// Higher Oder Function
// https://youtu.be/rRgD1yVwIvE
/* 
A function that accepts and/or returns another function is called 
a higher-order function.The Array.map method is one of the most 
common higher-order functions. We will use it as an example here. 
But there are several other higher-order functions: .filter, .reduce, etc.
*/

// *Foreach
let array = [2,4,6];
let indexes = []
array.forEach((element, index) => {
    indexes.push(index);
}); 
console.log(indexes);

// - Map
array = array.map(a=>a**2);
console.log(array);

// *Filter
/* 
Filter method returns a new array with all elements that
pass the test implemented by the provided function.
*/
let ages = [12, 17, 8, 21, 14, 11, 45, 35, 18];
let checkUnderAge = (age) => {
    return age >= 18;
}
let filter = ages.filter(a => checkUnderAge(a));
console.log(filter);

// *Sort
/*
Sort method is used to sort an array in ascending order.
It returns a new array and does not modify the original array.
*/
let unOrderArray = [1,3,5,7,9,2,4,6,8,10];
let orderArray = unOrderArray.sort((a,b)=>a-b);
console.log(orderArray);

// *Reduce
/*
Reduce method take two values and return a single value.
In that case every value is added to the accumulator.
*/
let reduce = array.reduce((a,b) => a+b, 0);
console.log(reduce);

// *Slice
/*
Another fundamental array method is slice, which takes 
start and end indices and returns an array that has only the 
elements between them. The start index is inclusive, the end 
index exclusive.
*/
let slice = [16,36,4].slice(1) + [16,36,4].slice(1,2);
console.log(slice);
