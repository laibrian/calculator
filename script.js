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