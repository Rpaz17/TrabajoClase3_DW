let firstnumber = "";
let secondnumber = "";
let operator = "";
let display = document.getElementById("display");

function addNumber(num){
    display.value += num;
}

function addDecimal(){
    if(!display.value.includes(".")){
        display.value += ".";
    }
}

function setOperation(op){
    firstnumber = parseFloat(display.value);
    operator = op;
    display.value = "";
}

function SUM (a,b) {
    return a+b;
}

function SUBTRACT (a,b) {
    return a-b;
}

function MULTIPLY (a,b) {
    return a*b;
}

function DIVIDE (a,b) {
    if (b === 0) {
        alert("Cannot divide by zero");
        return null;
    }       
    return a/b;
}

function calculate() {
    secondnumber = parseFloat(display.value);
    let result;
    switch(operator) {
        case "+":
            result = SUM(firstnumber, secondnumber);
            break;
        case "-":
            result = SUBTRACT(firstnumber, secondnumber);
            break;
        case "*":
            result = MULTIPLY(firstnumber, secondnumber);
            break;
        case "/":
            result = DIVIDE(firstnumber, secondnumber);
            break;
        default:
            alert("Invalid operator");
            return;
    }
    display.value = result;
    firstnumber = result;
    secondnumber = "";
    operator = "";
}

function clearDisplay() {
    display.value = "";
    firstNumber = "";
    secondNumber = "";
    operator = "";
}
