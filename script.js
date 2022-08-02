let currentOperator = null;
let firstOperand = '';
let secondOperand = '';
let isScreenClearable = false;

const display = document.getElementById('display');
const digitButtons = document.querySelectorAll('.digit');
const operatorButtons = document.querySelectorAll('.operator');
const equalButton = document.getElementById('equalBtn');
const clearButton = document.getElementById('clearBtn')

digitButtons.forEach((button) =>
    button.addEventListener('click', () => addDigit(button.textContent))
);

operatorButtons.forEach((button) =>
    button.addEventListener('click', () => setOperator(button.textContent))
);

clearButton.addEventListener('click', clear);

function addDigit(digit) {
    if (display.textContent === '0') resetDisplay();
    display.textContent += digit;
}

function setOperator(operator) {
    if (currentOperator !== null) operate();
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
    display.textContent = operate(currentOperator, firstOperand, secondOperand)
    currentOperator = null;
}

function resetDisplay() {
    display.textContent = '';
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