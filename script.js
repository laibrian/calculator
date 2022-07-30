// basic math operators
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

// operation
function operate(operator, a, b) {
    a = Number(a);
    b = Number(b);

    switch (operator) {
        case '+':
            return add(a, b);
        case '-':
            return add(a, b);
        case '×':
            return add(a, b);
        case '÷':
            if (b === 0) return null;
            return divide(a, b);
        default:
            return null;  
    }
}

let displayedNumber = "";
let firstNumber;
let secondNumber;
let currentOperator;
let isOperatorSelected = false;
let isOperationDone = false;

function displayNumber(number) {
    displayedNumber += number;
    calculatorDisplay.textContent = `${displayedNumber}`;
}

function clear() {
    isOperatorSelected = false;
    isOperationDone = true;
    displayedNumber = "";
    displayNumber(displayedNumber);
}

// UI
const calculatorDisplay = document.querySelector('#display');
const calculatorButtons = document.querySelectorAll('.button');

oneBtn.addEventListener('click', () => {
    if (isOperatorSelected) displayedNumber = "";
    displayNumber("1");
});

twoBtn.addEventListener('click', () => {
    if (isOperatorSelected) displayedNumber = "";
    displayNumber("2");
});

threeBtn.addEventListener('click', () => {
    if (isOperatorSelected) displayedNumber = "";
    displayNumber("3");
});

fourBtn.addEventListener('click', () => {
    if (isOperatorSelected) displayedNumber = "";
    displayNumber("4");
});

fiveBtn.addEventListener('click', () => {
    if (isOperatorSelected) displayedNumber = "";
    displayNumber("5");
});

sixBtn.addEventListener('click', () => {
    if (isOperatorSelected) displayedNumber = "";
    displayNumber("6");
});

sevenBtn.addEventListener('click', () => {
    if (isOperatorSelected) displayedNumber = "";
    displayNumber("7");
});

eightBtn.addEventListener('click', () => {
    if (isOperatorSelected) displayedNumber = "";
    displayNumber("8");
});

nineBtn.addEventListener('click', () => {
    if (isOperatorSelected) displayedNumber = "";
    displayNumber("9");
});

zeroBtn.addEventListener('click', () => {
    if (isOperatorSelected) displayedNumber = "";
    displayNumber("0");
});

clearBtn.addEventListener('click', clear());
equalBtn.addEventListener('click', operate());

addBtn.addEventListener('click', () => {
    currentOperator = "+";
    isOperatorSelected = true;
});

subtractBtn.addEventListener('click', () => {
    currentOperator = "-";
    isOperatorSelected = true;
});

multiplyBtn.addEventListener('click', () => {
    currentOperator = "*";
    isOperatorSelected = true;
});

divideBtn.addEventListener('click', () => {
    currentOperator = "/";
    isOperatorSelected = true;
});