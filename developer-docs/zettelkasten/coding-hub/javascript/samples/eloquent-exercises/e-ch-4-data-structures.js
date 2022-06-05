/* 
* The sum of a range
Write a range function that takes two arguments, start and end, 
and returns an array containing all the numbers from start up to (and including) end.

Next, write a sum function that takes an array of numbers and returns 
the sum of these numbers. Run the example program and see whether it does indeed return 55.

As a bonus assignment, modify your range function to take an optional 
third argument that indicates the “step” value used when building the array. 
If no step is given, the elements go up by increments of one, corresponding to 
the old behavior. The function call range(1, 10, 2) should return [1, 3, 5, 7, 9]. 
Make sure it also works with negative step values so that range(5, 2, -1) produces [5, 4, 3, 2].
*/

const range = (start,end, step=1)=>{
    let len = Math.floor(((end+1)-start)/step);
    return Array(len).fill().map((_, index)=>{
        let mod = 0;
        if(step>1){
            mod = 1;
        }
        return ((index + start)*step) + mod;
    });
}
console.log(range(0,9,1));
console.log(range(0,9,2));

// Resolve 1:
function sum(array){
    let sum = 0;
    for(let i=0; i<array.length; i++){
        sum += array[i];
    }
    return sum;
};
console.log(sum(range(0,9)));

// Resolve 2:
console.log(range(0,9).reduce((a,b)=>a+b));


/*
*Reversing an array
Arrays have a reverse method that changes the array by 
inverting the order in which its elements appear. For this exercise, 
write two functions, reverseArray and reverseArrayInPlace. 
The first, reverseArray, takes an array as argument and produces a new array 
that has the same elements in the inverse order. The second, reverseArrayInPlace, 
does what the reverse method does: it modifies the array given as argument by 
reversing its elements. Neither may use the standard reverse method.
*/



/*
*List
Write a function arrayToList that builds up a list structure like 
the one shown when given [1, 2, 3] as argument. Also write a 
listToArray function that produces an array from a list. Then add a helper function prepend, 
which takes an element and a list and creates a new list that adds the element to the 
ront of the input list, and nth, which takes a list and a number and returns the 
element at the given position in the list (with zero referring to the first element) 
or undefined when there is no such element.
*/

const node = (value, rest=null) => {
    return {value: value, rest:rest}
}

// Array to list

function arrayToList(array){
    let list = null;
    array.reverse().map((a)=>{
        list = node(a,list);
    });
    return list;
}

let listCreated = arrayToList([10,20,30]);
console.log(listCreated);

// List to array

function listToArray(list){
    let array = [];

    while(list){
        array.push(list.value);
        list = list.rest;
    }

    return array;
}

let arrayCreated = listToArray(listCreated);
console.log(arrayCreated);

// Prepend and append to a list

class LinkedList{
    constructor(value){
        this.list = value;
    }
    print(){
        // Function print iterate the list from 0 to n and print each node
        let node = this.list;
        while(node){
            console.log('Node: ' + node.value);
            node = node.rest;
        }
    }
    prepend(value){
        // Function prepend take an element given and push it into the beginning of the list
        let n = this.list;

        let previous = null;
        let next = null;

        while(n){

            if(n.value == value){
                if(!previous && !next){
                    console.log('The element has already been prepended.');
                    break;
                } else if (previous && next){
                    console.log(`Previous: ${previous.value}`);
                    console.log(`Next: ${next.value}`);
                    console.log('The element has in the middle');
                    previous.rest = next.rest;
                    this.unshift(n.value);
                    break;
                } 
                // else {
                //     console.log('Its the last');
                //     break;
                // }
            }

            previous = n;
            next = n.rest;
            n = n.rest;
        }
        return this.list;
    }
    count(){
        // Function count iterate the list from 0 to n
        let node = this.list;
        let i = 0;
        while(node){
            i++;
            node = node.rest;
        }
        return i;
    }
    unshift(value){
        // Function unshift add a new value to the beginning of the list
        let myNewList = node(value, this.list);
        this.list = myNewList;
        return myNewList;
    }
    index(i){
        let founded = null;
        let n = this.list;
        let j = 0;
        while(n){
            if(i == j){
                founded = n.value;
            }
            j++;
            n = n.rest;
        }
        return founded;
    }
    toString(){
        this.print();
        return `You have ${this.count()} items in your list.`;
    }
}

console.log('');
let myLinkedList = new LinkedList(listCreated);
console.log(myLinkedList.unshift(20));
console.log(myLinkedList.toString());

console.log('');
myLinkedList.prepend(20);
console.log(myLinkedList.toString());

console.log('');
console.log(myLinkedList.index(1));

/*
*Deep comparison
The == operator compares objects by identity. But sometimes you’d prefer 
to compare the values of their actual properties.

Write a function deepEqual that takes two values and returns true 
only if they are the same value or are objects with the same properties, 
where the values of the properties are equal when compared with a recursive 
call to deepEqual.
*/

function deepEqual(a, b) {
    if (a === b) return true;

    if (a == null || typeof a != "object" ||
        b == null || typeof b != "object") return false;

    let keysA = Object.keys(a), keysB = Object.keys(b);

    if (keysA.length != keysB.length) return false;

    for (let key of keysA) {
        if (!keysB.includes(key) || !deepEqual(a[key], b[key])) return false;
    }

    return true;
}

console.log('');
let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true