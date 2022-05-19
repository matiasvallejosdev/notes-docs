// Calculator Program

equal = document.getElementById('equal');
clear = document.getElementById('clear');
displayer = document.getElementById('display');
operation = document.getElementById('operation');

operators = document.querySelectorAll('#operator');
numbers = document.querySelectorAll('#number');

let currentNumber = 0;
let currentOperation = "";


const clickOperator = (e) => {
    currentOperation += (currentNumber + " " + e.target.textContent)
    operation.textContent = currentOperation;
    clearCalculator();
    console.log(e.target.textContent);
}
const equalCalculator = (e) => {
    clearCalculator();
}
const clearCalculator = (e) => {
    currentNumber = 0;
    displayer.textContent = currentNumber;
    // currentOperation = "";
    // operation.textContent = currentOperation;
    console.log('Clear calculator');
}
const clickNumber = (e) => {
    let numberPressed = e.target.textContent;
    if(currentNumber == 0){
        currentNumber = numberPressed;
    } else {
        currentNumber += numberPressed;
    }
    displayer.textContent = currentNumber;
    console.log(numberPressed);
}

numbers.forEach((number) =>{
    number.addEventListener('click', clickNumber);
});
operators.forEach((op) =>{
    op.addEventListener('click', clickOperator);
});
clear.addEventListener('click', clearCalculator);
equal.addEventListener('click', equalCalculator);