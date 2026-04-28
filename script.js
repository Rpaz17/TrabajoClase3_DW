let firstnumber = "";
let secondnumber = "";
let operator = "";
let display = document.getElementById("display");

function addNumber(num) {
    display.value += num;
}

function addDecimal() {
    if (!display.value.includes(".")) {
        display.value += ".";
    }
}

function setOperation(op) {
    display.value += op;
}

function SUM(a, b) {
    return a + b;
}

function SUBTRACT(a, b) {
    return a - b;
}

function MULTIPLY(a, b) {
    return a * b;
}

function DIVIDE(a, b) {
    if (b === 0) {
        alert("Cannot divide by zero");
        return null;
    }
    return a / b;
}

function addParenthesis(parenthesis) {
    display.value += parenthesis;
}

function getPriority(op) {
    if (op === "+" || op === "-") {
        return 1;
    }

    if (op === "*" || op === "/") {
        return 2;
    }

    return 0;
}

function applyOperation(numbers, operators) {
    let b = numbers.pop();
    let a = numbers.pop();
    let op = operators.pop();

    let result;

    if (op === "+") {
        result = SUM(a, b);
    } else if (op === "-") {
        result = SUBTRACT(a, b);
    } else if (op === "*") {
        result = MULTIPLY(a, b);
    } else if (op === "/") {
        result = DIVIDE(a, b);
    }

    numbers.push(result);
}

function calculate() {
    let expression = display.value;
    let numbers = [];
    let operators = [];

    for (let i = 0; i < expression.length; i++) {
        let character = expression[i];

        if (!isNaN(character) || character === ".") {
            let number = "";

            while (i < expression.length && (!isNaN(expression[i]) || expression[i] === ".")) {
                number += expression[i];
                i++;
            }

            i--;
            numbers.push(parseFloat(number));
        }

        else if (character === "(") {
            operators.push(character);
        }

        else if (character === ")") {
            while (operators.length > 0 && operators[operators.length - 1] !== "(") {
                applyOperation(numbers, operators);
            }

            operators.pop();
        }

        else if (character === "+" || character === "-" || character === "*" || character === "/") {
            while (
                operators.length > 0 &&
                getPriority(operators[operators.length - 1]) >= getPriority(character)
            ) {
                applyOperation(numbers, operators);
            }

            operators.push(character);
        }
    }

    while (operators.length > 0) {
        applyOperation(numbers, operators);
    }

    display.value = numbers[0];
}

function clearDisplay() {
    display.value = "";
    firstnumber = "";
    secondnumber = "";
    operator = "";
}
