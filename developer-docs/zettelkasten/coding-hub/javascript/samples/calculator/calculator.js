
// *Calculator Program

// Variables
display = document.getElementById('display');
answer = document.getElementById('answer');

equal = document.getElementById('equal');
clear = document.getElementById('clear');
operators = document.querySelectorAll('#operator');
numbers = document.querySelectorAll('#number');

downloadBtn = document.getElementById('download');

// *Program

const history = []

const calculator = {
    displayValue: '0',
    firstOperand: null,
    operator: null,
    waitingForSecondOperand: false,
    lastAnswer: ''
}

const calculations={
    '/': (a,b) => a/b,
    '*': (a,b) => a*b,
    '+': (a,b) => a+b,
    '-': (a,b) => a-b
} 

function updateDisplay(){
    display.value = calculator.displayValue;
    answer.textContent = `${calculator.lastAnswer}`;
}
updateDisplay();

function performHistory(result){
    const calculated = {
        firstOperand: calculator.firstOperand,
        secondOperand: parseFloat(calculator.displayValue),
        operator: calculator.operator,
        result: result
    }
    return JSON.stringify(calculated);
}

function performCalculation(operator){
    const value = parseFloat(calculator.displayValue);
    if(calculator.firstOperand == null){
        calculator.firstOperand = value;
    } else if(calculator.operator){
        const result = calculations[calculator.operator](calculator.firstOperand, value);
        history.push(performHistory(result));

        calculator.lastAnswer = `${calculator.firstOperand} ${calculator.operator} ${value}`;
        calculator.displayValue = result;
        calculator.firstOperand = result;
    }
    calculator.waitingForSecondOperand = true;
    calculator.operator = operator;
    updateDisplay();
}

numbers.forEach((number) =>{
    number.addEventListener('click', ()=>{
        const value = number.innerText;
        if(calculator.waitingForSecondOperand){
            calculator.displayValue = value;
            calculator.waitingForSecondOperand = false;
        } else {
            if(calculator.displayValue == '0'){
                calculator.displayValue = value;
            } else {
                calculator.displayValue += value;
            }
        }
        updateDisplay();
    });
});

operators.forEach((op) =>{
    op.addEventListener('click', ()=>{
        const key = op.innerText;
        performCalculation(key);
    });
});

equal.addEventListener('click', (   )=>{
    performCalculation(calculator.operator);
});

clear.addEventListener('click', ()=>{
    calculator.displayValue = '0';
    calculator.firstOperand = null;
    calculator.operator = null;
    calculator.waitingForSecondOperand = false;
    lastAnswer = '';
    updateDisplay();
});

downloadBtn.addEventListener('click', ()=>{ 
    let id = Math.floor(((Math.random() * 100000) + 1) * Math.PI);
    download(history, `${id}_history.json`, 'application/json');
});