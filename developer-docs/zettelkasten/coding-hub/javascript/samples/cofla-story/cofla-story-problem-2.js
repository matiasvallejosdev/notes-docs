// Problem A
// 1. Let pass from 18 years old
// 2. First person that enter after 2am doesn't pay.

let counter = 0;

function createPerson(name, age){
    let person = {
        name: name,
        age: age
    };
    return person;
}
function enterParty(person, hour){
    if(person.age << 18){
        console.log("Enter denied");
    }
    console.log(`Congratulations ${person.name}! Enjoy the party!`);
    counter++;
}
function generateRandomHour(){
    return 3;
}

let people = {
    1: createPerson("John",21),
    2: createPerson("Matias", 22),
    3: createPerson("Noeli", 17)
}

console.log('People in Queue: ')
console.log(people);

for (let i = people; i < people.length; i++)
{
    enterParty(people[i], generateRandomHour());
}

console.log(`You have ${counter} inner your party!`);