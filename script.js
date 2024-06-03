const numbers = document.querySelector(".numbers");
const screen = document.querySelector(".screen");
const operators = document.querySelector(".operators");
const equal = document.querySelector(".equal");

let firstNumber;
let operator = "";
let secondNumber;
let buffer;
let result;

numbers.addEventListener("click", event => {
    if (event.target.textContent === "DEL") {
        screen.textContent = screen.textContent.slice(0,-1);
        buffer = screen.textContent;
    } else {
        if (screen.textContent === "" || screen.textContent === "0") {
            screen.textContent = event.target.textContent;
            buffer = screen.textContent;
        } else {
            screen.textContent += event.target.textContent;
            buffer = screen.textContent;
        }    
    }
});

operators.addEventListener("click", event => {
    if (operator === "") {
        operator = event.target.textContent;
        firstNumber = buffer;
        buffer = 0;
        screen.textContent = "";
    } else {
        //fix the gotchas here maybe?

    }
})

equal.addEventListener("click", () => {
    buffer = screen.textContent;
    secondNumber = buffer;
    operate();
    screen.textContent = result;
    buffer = result;
})






function add (num1, num2){
    return parseInt(num1) + parseInt(num2);
}
function subtract (num1, num2) {
    return parseInt(num1) - parseInt(num2);
}
function devide (num1, num2) {
    if (num2 === "0") {return "HAHA, good one!"}
    else {
        return parseInt(num1) / parseInt(num2);
 
    }
}
function multiply (num1, num2) {
    return parseInt(num1) * parseInt(num2);
}

function operate () {
 if (operator === "+") {result = add(firstNumber, secondNumber)}
 else if (operator === "-") {result = subtract(firstNumber, secondNumber)}
 else if (operator === "÷") {result = devide(firstNumber, secondNumber)}
 else if (operator === "×") {result = multiply(firstNumber, secondNumber)}
}