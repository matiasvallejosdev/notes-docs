// Problem A
// 1. Let pass from 18 years old
// 2. First person that enter after 2am doesn't pay.

let ticket = 15;
let counter = 0;

function createPerson(name, age){
    let person = {
        name: name,
        age: age
    };
    return person;
}
function enterParty(person, hour){
    console.log('');

    if(person.age < 18){
        console.log(`Enter denied ${person.name} your age is ${person.age}!`);
        return;
    }

    payParty(hour);
    console.log(`Congratulations ${person.name}! Enjoy the party!`);
    counter++;
}
function payParty(hour){
    console.log(`You enter at ${hour}am!`);
    if(hour >= 2){
        console.log('You dont pay this party!');
        return;
    }
    console.log(`You spent ${ticket} dollars.`);
}

generateRandomHour = (max) => Math.floor(Math.random() * max);

let people = {
    1: createPerson("John",21),
    2: createPerson("Matias", 22),
    3: createPerson("Noeli", 17)
}

console.log('People in Queue: ')
console.log(people);

Object.entries(people).forEach(([k,v])=>{
    enterParty(v, generateRandomHour(3));
});

console.log('');
console.log(`You have ${counter} inner your party!`);