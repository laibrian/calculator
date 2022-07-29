// basic math operators
// add
function add(a, b) {
    console.log("result at add: " + (a+b));
    return a + b;
}

// subtract
function subtract(a, b) {
    return a - b;
}

// multiply
function multiply(a, b) {
    return a * b;
}

// divide
function divide(a, b) {
    return a / b;
}

// operation
function operate(operator, a, b) {
    if (operator === "+") {
        return add(a, b);
    }

    if (operator === "-") {
        return subtract(a, b);
    }

    if (operator === "*") {
        return multiply(a, b);
    }

    if (operator === "/") {
        return divide(a, b);
    }
}

let displayedNumber = "";
let firstNumber;
let secondNumber;
let currentOperator;
let isOperatorSelected = false;

function displayNumber(number) {
    displayedNumber += number;
    calculatorDisplay.textContent = `${displayedNumber}`;
}

// convert number string to number type
function convertNumStr(displayedNumber) {
    converted = Number(displayedNumber);
    console.log("converted " + converted);
    return converted;
}

function clear() {
    isOperatorSelected = false;
    displayedNumber = "";
    displayNumber(displayedNumber);
}

// UI
const calculatorDisplay = document.querySelector('#display');
const oneBtn = document.querySelector('#one');
const twoBtn = document.querySelector('#two');
const threeBtn = document.querySelector('#three');
const fourBtn = document.querySelector('#four');
const fiveBtn = document.querySelector('#five');
const sixBtn = document.querySelector('#six');
const sevenBtn = document.querySelector('#seven');
const eightBtn = document.querySelector('#eight');
const nineBtn = document.querySelector('#nine');
const zeroBtn = document.querySelector('#zero');
const clearBtn = document.querySelector('#clear');
const addBtn = document.querySelector('#add');
const subtractBtn = document.querySelector('#subtract');
const multiplyBtn = document.querySelector('#multiply');
const divideBtn = document.querySelector('#divide');
const equalBtn = document.querySelector('#equal');

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

clearBtn.addEventListener('click', () => {
    clear();
});

equalBtn.addEventListener('click', () => {
    if (isOperatorSelected) {
        secondNumber = convertNumStr(displayedNumber);
        let result = operate(currentOperator, firstNumber, secondNumber);
        displayNumber(result);
        console.log("result at operate: " + result);
        isOperatorSelected = false;
    }
    return;
});

addBtn.addEventListener('click', () => {
    firstNumber = convertNumStr(displayedNumber);
    currentOperator = "+";
    isOperatorSelected = true;
});