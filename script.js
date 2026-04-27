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

function clearDisplay() {
    display.value = "";
    firstNumber = "";
    secondNumber = "";
    operator = "";
}
