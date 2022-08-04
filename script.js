let currentOperator = null;
let firstOperand = '';
let secondOperand = '';
let isScreenClearable = false;

const display = document.getElementById('display');
const digitButtons = document.querySelectorAll('.digit');
const operatorButtons = document.querySelectorAll('.operator');
const equalButton = document.getElementById('equalBtn');
const clearButton = document.getElementById('clearBtn');
const deleteButton = document.getElementById('deleteBtn');
const decimalButton = document.getElementById('decimalBtn');

digitButtons.forEach((button) =>
    button.addEventListener('click', () => addDigit(button.textContent))
);

operatorButtons.forEach((button) =>
    button.addEventListener('click', () => setOperator(button.textContent))
);

equalButton.addEventListener('click', completeOperation);
clearButton.addEventListener('click', clear);
deleteButton.addEventListener('click', deleteDigit);
decimalButton.addEventListener('click', addDecimal);

function addDigit(digit) {
    if (display.textContent === '0' || isScreenClearable) resetDisplay();
    
    display.textContent += digit;
}

function addDecimal() {
    if (isScreenClearable) resetDisplay();

    if (display.textContent.includes('.')) return;  // prevent adding another decimal if already exists

    if (display.textContent === '') display.textContent = '0';  // add '0.' to display if nothing on display
    
    display.textContent += '.';
}

function setOperator(operator) {
    if (currentOperator !== null) completeOperation();

    firstOperand = display.textContent;
    currentOperator = operator;
    isScreenClearable = true;
}

function completeOperation() {
    if (currentOperator === null || isScreenClearable) return;

    if (currentOperator === '÷' && display.textContent === '0') {
        alert("ERROR! Cannot divide by 0!");
        return;
    }

    secondOperand = display.textContent;
    display.textContent = roundResult(operate(currentOperator, firstOperand, secondOperand));
    currentOperator = null;
}

function roundResult(result) {
    return Math.round(result * 1000) / 1000;
}

// reset display whenever a new number is entered after operator selected
function resetDisplay() {
    display.textContent = '';
    isScreenClearable = false;
}

function deleteDigit() {
    display.textContent = display.textContent.toString().slice(0, -1);
}

function clear() {
    display.textContent = '0';
    currentOperator = null;
    firstOperand = '';
    secondOperand = '';
    isScreenClearable = false;
}

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

// determine what to operate
function operate(operator, a, b) {
    a = Number(a);
    b = Number(b);

    switch (operator) {
        case '+':
            return add(a, b);
        case '-':
            return subtract(a, b);
        case '×':
            return multiply(a, b);
        case '÷':
            if (b === 0) return null;
            return divide(a, b);
        default:
            return null;  
    }
}