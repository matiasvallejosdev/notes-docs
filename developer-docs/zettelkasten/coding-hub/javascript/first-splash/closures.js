// * Closures
/* 
    Closures are functions that have access 
    to variables outside of their scope.
*/

// Counter example
const myCounter = () => {
    let counter = 0;
    return{
        add: function add(){
            counter++
            return counter;
        },
        substract: function add(){
            counter--
            return counter;
        },
        reset: function reset() {
            counter = 0;
            return counter;
        },
        print: function print(){
            console.log(`Counter: ${counter}`)
        }
    }
}

const counter = myCounter();
counter.add()
counter.add()
counter.print()
counter.reset()
counter.print()

// Clue example
const newClue = (name) => {
    const len = name.length;
    return function weapon(weapon) {
        let clue = len + weapon.length;
        return (clue % 2) ? "It's a murder" : "It's inocent";
    }
};

const didWithGreen = newClue("Green Arrow")
console.log(didWithGreen("Arrows"))
console.log(didWithGreen("Candlestick"))

// Closure calculator
const calculator = () => {
    let result = 0;
    return {
        add: function add(a) {
            result = result + a;
        },
        substract: function substract(a) {
            result = result - a;
        },
        multiply: function multiply(a) {
            result = result * a;
        },
        divide: function divide(a) {
            result = result / a;
        },
        reset: function reset() {
            result = 0;
        },
        print: function print(){
            console.log(`Your result is ${result}`);
        }
    };
}

const calc = calculator(); 
calc.add(10);
calc.multiply(10);
calc.divide(2);
calc.print();