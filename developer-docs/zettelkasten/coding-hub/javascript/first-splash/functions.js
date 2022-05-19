// Define a function that is useful to exponent a base
// Functions with parameters

const power = function(power, exponent){
    let result = power ** exponent;
    return result;
}

console.log(power(2,10)); //1024

// Nested scope
// Functions inside of a function
const diet = function(factor){
    let unit = "Good diet";
    
    const ingredient = function(amount){
        i = amount ** 2 / 125;
        return i;
    }

    if(ingredient(factor) > 1){
        unit = "Bad diet";
    }

    console.log(`${unit} with a factor ${factor} related to ${i}`);
}

// Given a factor defin if it's a good or bad diet
diet(3);

// Functions are not part of flow top to bottom scope
console.log(`Addition: ${addition(10,10)}`)
function addition(x,y){
    return x+y;
}

// Multiple optional parameters or undefined parameters

const optionalParameters = (a,b) =>{
    if(b===undefined){
        console.log('b value is not defined.')
    }
}
optionalParameters(10);

const multipleParameters = (a,b,c,d) => {
    return a*b;
}
console.log(multipleParameters(10,2));

const defaultParameters = (a,b=2) => {
    return a**b
}
console.log(defaultParameters(2));

/* 
We want to write a program that prints two numbers: 
the numbers of cows and chickens on a farm, with 
the words Cows and Chickens after them and zeros 
padded before both numbers so that they are always 
three digits long.
*/

// 007 Cows
// 011 Chickens

const zeroPad = (name, char)=>{
    let ch = `${char}`;
    return ch.repeat(3) + " " + name;
};

// console.log(zeroPad("Cow", "0"));

let farm = ["Cows", "Pigs", "Horses"];
printFarmInventory(farm, "0");

function printFarmInventory(farm, ch){
    farm.forEach(animal => {
        console.log(zeroPad(animal, ch))
    });
}

