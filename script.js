// basic math operators
// add
function add(a, b) {
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

function displayNumber(number) {
    displayedNumber += number;
    calculatorDisplay.textContent = `${displayedNumber}`;
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

oneBtn.addEventListener('click', () => {
    displayNumber("1");
});

twoBtn.addEventListener('click', () => {
    displayNumber("2");
});

threeBtn.addEventListener('click', () => {
    displayNumber("3");
});

fourBtn.addEventListener('click', () => {
    displayNumber("4");
});

fiveBtn.addEventListener('click', () => {
    displayNumber("5");
});

sixBtn.addEventListener('click', () => {
    displayNumber("6");
});

sevenBtn.addEventListener('click', () => {
    displayNumber("7");
});

eightBtn.addEventListener('click', () => {
    displayNumber("8");
});

nineBtn.addEventListener('click', () => {
    displayNumber("9");
});

zeroBtn.addEventListener('click', () => {
    displayNumber("0");
});