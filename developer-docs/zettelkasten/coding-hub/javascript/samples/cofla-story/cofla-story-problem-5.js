/* 
* Problem A

- Perfeccionar la calculadora para poder implementar potencias, 
raiz cuadrada y cubica.
*/

class Calculator{
    constructor(){
        this.result = 0;
        this.lastOperation = "";
    }
    add(a,b){
        this.result = a + b;
        this.lastOperation = `${a} + ${b}`;
        return this.result;
    }
    subtract(a,b){
        this.result = a - b;
        this.lastOperation = `${a} - ${b}`;
        return this.result;
    }
    multiply(a,b){
        this.result = a * b;
        this.lastOperation = `${a} * ${b}`;
        return this.result;
    }
    divide(a,b){
        if(a == 0 || b == 0){
            this.result = 0
            return this.result
        }
        this.result = a / b;
        this.lastOperation = `${a} / ${b}`;
        return this.result;
    }
    power(a,b=2){
        this.result = Math.pow(a, b);
        this.lastOperation = `${a} ** ${b}`;
        return this.result;
    }
    squareRoot(a){
        this.result = Math.sqrt(a);
        this.lastOperation = `$_/${a}`;
        return this.result;
    }
    cubeRoot(a){
        this.result = Math.cbrt(a);
        this.lastOperation = `${a} ** 3`;
        return this.result;
    }
    getLastOperation(){
        return this.lastOperation + " = " + this.result;
    }   
}

const calc = new Calculator();
calc.divide(25,5)
console.log(calc.getLastOperation());
calc.power(2,3)
console.log(calc.getLastOperation());


/* 
* Problem B

- Crear una funcion que al pasarle como parametro la materia nos devuelva
el profesor asigando y el nombre de todos los alumnos.
- Crear una funcion que nos diga cuantas clases esta un alumno.
- Nombrar las clases en las que esta el alumno y los profesores de cada
clase. 
- Crear una funcion para preguntar en que materia inscribir al alumno.
- Crear una funcion que nos diga cuantos alumnos hay en una clase.
- Podra haber unicamente 5 alumnos por clase.
*/

class Classroom{
    constructor(name, proffessor){
        this.name = name;
        this.proffessor = proffessor;
        this.students = [];
    }
    addStudent(student){
        if(this.students.length < 5){
            student.classes.push(this.name);
            this.students.push(student);
            return 'The student was added to the classroom!';
        } else {
            return 'The classroom is full!';
        }
    }
    getStudents(){
        return this.students;
    }
    getClassroom(){
        return `${this.name} - ${this.proffessor}`;
    }
    countStudents(){
        return this.students.length;
    }
    toString(){
        return `The classroom ${this.name} is given by ${this.proffessor.toString()} with ${this.countStudents()} students.`;
    }
}

class Person{
    constructor(name, age){
        this.name = name
        this.age = age
    }
    toString(){
        return `${this.name}`;
    }
}

class Student extends Person{
    constructor(name, age){
        super(name, age)
        this.classes = []
    }
    countClasses(){
        return this.classes.length;
    }
}

class Proffessor extends Person{
    constructor(name, age){
        super(name, age)
        this.classes = []
    }
}

const juan = new Proffessor('Juan', 30);
const maths = new Classroom('Maths', juan);

maths.addStudent(new Student('Matias', 30));
maths.addStudent(new Student('Elon', 22));
maths.addStudent(new Student('Jeff', 22));
maths.addStudent(new Student('Maurito', 25));
maths.addStudent(new Student('Warren', 22));

console.log(maths.toString());

const pedro = new Proffessor('Pedro', 22);
const programming = new Classroom('Programming', pedro);

programming.addStudent(new Student('Maurito', 22));
programming.addStudent(new Student('Warren', 27));

console.log(programming.toString());

// Apply higher-order functions to find some students in the array classroom.
// Ref to first-splash/high-order-functions.js
console.log(maths.students.filter(student => student.age > 22));
let average = maths.students.reduce((total, student) => total + student.age, 0) / maths.students.length;
console.log(average);

// Practice highlevel functions
const classes = [maths, programming];
let studentAbove24 = classes.map(classroom => classroom.students.filter(student => student.name === 'Maurito'));
console.log(studentAbove24);