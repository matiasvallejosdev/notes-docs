/* 
* A vector type
Write a class Vec that represents a vector in two-dimensional space. 
It takes x and y parameters (numbers), which it should save to properties of 
the same name.

Give the Vec prototype two methods, plus and minus, that take another 
vector as a parameter and return a new vector that has the sum or difference 
of the two vectors’ (this and the parameter) x and y values.

Add a getter property length to the prototype that computes the length
of the vector—that is, the distance of the point (x, y) from the origin (0, 0). 
*/

class Vec{
    constructor(x,y){
        this.x = x;
        this.y = y;
    }
    plus(vec){
        const newLocal = new Vec(this.x + vec.x, this.y + vec.y);
        return newLocal;
    }
    minus(vec){
        const newLocal = new Vec(this.x-vec.x, this.y-vec.y);
        return newLocal;
    }
    get length(){
        return Math.sqrt(this.x**2 + this.y**2);
    }
    toString(){
        return `(${this.x},${this.y})`
    }
}

const vector = new Vec(2,3);
console.log(vector.toString());
console.log(vector.plus(new Vec(2,3)).toString());
console.log(vector.minus(new Vec(1,1)).toString());
console.log(new Vec(3,4).length);

/*
* Groups
The standard JavaScript environment provides another data structure called Set. 
Like an instance of Map, a set holds a collection of values. Unlike Map, it does 
not associate other values with those—it just tracks which values are part of 
the set. A value can be part of a set only once—adding it again doesn’t have 
any effect.

Write a class called Group (since Set is already taken). Like Set, it has add, 
delete, and has methods. Its constructor creates an empty group, add adds a value 
to the group (but only if it isn’t already a member), delete removes its argument 
from the group (if it was a member), and has returns a Boolean value indicating 
whether its argument is a member of the group.

Use the === operator, or something equivalent such as indexOf, to determine
whether two values are the same.

Give the class a static from method that takes an iterable object as argument 
and creates a group that contains all the values produced by iterating over it.
*/

class Group{
    constructor(){
        this.group = [];
    }
    add(value){
        if(!this.group.includes(value)){
            this.group.push(value);
        }
    }
    delete(value){
        this.group = this.group.filter(item => item !== value);
    }
    has(value){
        return this.group.includes(value);
    }
    static from(iterable){
        const newGroup = new Group();
        for(let item of iterable){
            newGroup.add(item);
        }
        return newGroup;
    }
    toString(){
        return this.group.join(' > ');
    }

    [Symbol.iterator]() {
        return new GroupIterator(this);
      };
    }


const group = Group.from([1,2,2,2,3,4,5])
group.delete(5)
console.log(group.toString())

/* 
* Iterable groups
Make the Group class from the previous exercise iterable. Refer to the 
section about the iterator interface earlier in the chapter if you aren’t 
clear on the exact form of the interface anymore.

If you used an array to represent the group’s members, don’t just return the 
iterator created by calling the Symbol.iterator method on the array. That would 
work, but it defeats the purpose of this exercise.

It is okay if your iterator behaves strangely when the group is modified 
during iteration.
*/

class GroupIterator {
    constructor(o) {
        this.i = 0;
        this.group = o.group;
    }
    
    next() {
        if (this.i == this.group.length || this.i > 10) return {done: true};

        let value = this.group[this.i];
        this.i++;
        return {value, done: false};
    }
}


for (let value of Group.from(["a", "b", "c", "d"])) {
    console.log(value);
}

/*
* Borrowing a method

Can you think of a way to call hasOwnProperty on an object that has 
its own property by that name?
*/

let map = {one: true, two: true, hasOwnProperty: true};
console.log(Object.prototype.hasOwnProperty.call(map, "one"));