// You could define as a function
// That is the old traditional way to define OOP
function ProductA(_name, _price) 
{   
    const name = _name;  
    const price = _price;
    this.getName = function() {    return name;  };
    this.getPrice = function() {    return price;  };
    this.toString = function() {    return `Your product ${name} cost ${price}`}
}

// You could define the same with class name
// That is the modern definition of ES6
class ProductB
{
    constructor(_name, _price){
        this._name = _name;
        this._price = _price;
    }
    
    getName() {return this._name};
    getPrice() {return this._price};
    toString() {return `Your product ${this._name} cost ${this._price}`}
}

let productA = new ProductA('AAA', 150);
let productB = new ProductB('BBB', 900);

console.log(productA.toString());
console.log(productB.toString());

// Inheritance 
// It is a concept in which some property and methods of an Object is being used by another Object. 
// Example of Student that inherit from Person every property
// In that case inherit name and toString method

// Encapsulation 
// The process of wrapping property and function within a single unit is known as encapsulation.
// In that case encapsulate the property age

// Polymorphism
// The polymorphism is a core concept of an object-oriented paradigm that provides a way to perform a single action in different forms.

class Person{
    constructor(name){
        this.name = name;
    }   
    // Age encapsulation
    getAge(){
        return this.age;
    }
    setAge(age){
        // In that case the use don't know anything about what happen
        this.age = age;
    }
    toString(){
        return `Person ${this.name}`;
    }
    // Polymorphism of that function
    birthday(){
        return '2022-05-24';
    }
}

class Student extends Person{
    constructor(name, classRoom){
        // Call to origin constructor
        super(name);
        this.classRoom = classRoom;
    }
    toString() {
        return `Person ${this.name} in the Classroom ${this.classRoom} with age ${this.getAge()}`;
    }
}

const myStudent = new Student('Matias', 'Maths');
myStudent.setAge(20);
console.log(myStudent.toString());
console.log('My birthady is ' + myStudent.birthday());

// Get, set, this
// Get is a method that return the value of a property
// Set is a method that set the value of a property
// This is a method that return the current object

const order = {
    log: [1,2,3],
    set input(number){
        this.log.unshift(number);
    },
    get output(){
        let order = this.log.pop();
        return order;
    }
}
console.log(order.output);
console.log(order.output);
order.input = 12;
order.input = 10;
console.log(order.log);


// Prototype objects and Prototype properties in objects
let shape = {
    type: 'generic'
}
let circle = {
    class: 'circle',
    radius: 1
};

// You could add more properties inner the proto property
circle.__proto__ = shape;
console.log(circle);
console.log(circle.__proto__);


