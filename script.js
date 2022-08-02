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

digitButtons.forEach((button) =>
    button.addEventListener('click', () => addDigit(button.textContent))
);

operatorButtons.forEach((button) =>
    button.addEventListener('click', () => setOperator(button.textContent))
);

equalButton.addEventListener('click', completeOperation);
clearButton.addEventListener('click', clear);
deleteButton.addEventListener('click', deleteDigit);

function addDigit(digit) {
    if (display.textContent === '0' || isScreenClearable) resetDisplay();
    display.textContent += digit;
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
    console.log("First Op " + firstOperand);
    console.log("Second Op " + secondOperand);
    console.log(typeof(secondOperand));
    display.textContent = operate(currentOperator, firstOperand, secondOperand);
    currentOperator = null;
}

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